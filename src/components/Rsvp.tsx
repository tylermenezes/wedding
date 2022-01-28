import { useState, useEffect } from 'react';
import {
  ChakraProps,
  Box,
  Text,
  HStack,
  FormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Button,
  Radio,
  RadioGroup,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";
import { ImMail } from 'react-icons/im';

const SIMPLE_EMAIL_REGEX = /^\S+@\S+\.\S+$/;

const API = 'https://script.google.com/macros/s/AKfycbwWLIhNXc4uNEY8DPPpur7EF4twmdpNw1isdsF0xX9N8LVXccuOgDSqXpda85lD4GjTHQ/exec';

type APIResponse = {
  success: boolean
  name: string
  max: number
  rsvp: number | null
  email: string | null
  dietary: string | null
}

interface RsvpNumberPickerProps extends ChakraProps {
  max: number
  onChange: (newCount: number) => any
  colorScheme?: string
  defaultValue?: number | null
}

function RsvpNumberPicker({ max, onChange, colorScheme, defaultValue, ...rest }: RsvpNumberPickerProps) {
  return (
    <Box {...rest}>
      <RadioGroup
        defaultValue={defaultValue ? defaultValue.toString() : undefined}
        onChange={(e) => onChange(Number.parseInt(e))}
      >
        <HStack>
          <Radio value="0" size="lg" colorScheme={colorScheme}>
            No one
          </Radio>
          {Array.from(Array(max).keys()).map((num) => (
            <Radio key={num} value={`${num + 1}`} size="lg" colorScheme={colorScheme} pl={8}>
              {num + 1} {num === 0 ? 'person' : 'people'}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
    </Box>
  )
}

export default function Rsvp(props: ChakraProps) {
  const toast = useToast();
  const [code, setCode] = useState('');
  const [info, setInfo] = useState<APIResponse | undefined>();
  const [rsvp, setRsvp] = useState<number | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [dietary, setDietary] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <Box {...props}>
        <Text textAlign="center">
          Thank you, we have updated your RSVP for {typeof rsvp === 'undefined' ? (info?.rsvp || '?') : rsvp} attendees.
        </Text>
      </Box>
    )
  }

  if (info?.success ) {
    return (
      <Box {...props}>
        <Text mb={4} fontWeight="bold" fontSize="lg" textAlign="center">{info.name}</Text>
        <FormControl mb={8}>
          <FormLabel>Who is coming?</FormLabel>
          <RsvpNumberPicker
            textAlign="center"
            colorScheme="purple"
            mb={4}
            max={info.max}
            onChange={setRsvp}
            defaultValue={info.rsvp}
          />
        </FormControl>
        {(typeof rsvp !== 'undefined' ? rsvp : (info?.rsvp || 0)) > 0 && (
          <>
            <FormControl mb={8}>
              <FormLabel>What email can we use to reach you?</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none"><Icon as={ImMail} color="gray.300" /></InputLeftElement>
                <Input
                  type="email"
                  placeholder="you@yours.com"
                  defaultValue={info.email || ''}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl mb={8}>
              <FormLabel>If you have any dietary restrictions, please specify:</FormLabel>
              <Input
                type="text"
                defaultValue={info.dietary || ''}
                onChange={(e) => setDietary(e.target.value)}
              />
              {(typeof rsvp !== 'undefined' ? rsvp : (info?.rsvp || 0)) > 1 && (
                <FormHelperText>Please specify who has the restriction.</FormHelperText>
              )}
            </FormControl>
          </>
        )}
        <Box textAlign="center">
          <Button
            colorScheme="purple"
            isLoading={isLoading}
            disabled={
              (typeof rsvp === 'undefined' && typeof email === 'undefined' && typeof dietary === 'undefined')
              || (Boolean(email) && !SIMPLE_EMAIL_REGEX.test(email!))
            }
            onClick={async () => {
              setIsLoading(true);
              try {
                const params = new URLSearchParams({
                  code,
                  ...(typeof rsvp !== 'undefined' ? { rsvp: rsvp.toString() } : {}),
                  ...(typeof email !== 'undefined' ? { email: email as string } : {}),
                  ...(typeof dietary !== 'undefined' ? { dietary: dietary as string } : {}),
                });
                const resp = await fetch(`${API}?${params.toString()}`);
                const data = await resp.json();
                if (!data.success) {
                  toast({
                    title: 'Error',
                    description: 'Invalid RSVP.',
                    status: 'error',
                  });
                } else {
                  setIsSubmitted(true);
                  toast({
                    title: 'Success!',
                    description: 'RSVP submitted.',
                    status: 'success',
                  })
                }
              } catch(ex) {
                  toast({
                    title: 'Error',
                    description: (ex as Error).toString(),
                    status: 'error',
                  });
              }
              setIsLoading(false);
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    )
  }

  return (
    <HStack justifyContent="center" {...props}>
      <Text>Code:</Text>
      <HStack>
        <PinInput type="alphanumeric" isDisabled={isLoading} onChange={(e) => setCode(e)}>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <Button
        colorScheme="purple"
        isLoading={isLoading}
        disabled={code.length !== 4}
        onClick={async () => {
          setIsLoading(true);
          try {
            const resp = await fetch(`${API}?code=${encodeURIComponent(code)}`);
            const data = await resp.json();
            if (!data.success) {
              toast({
                title: 'Error',
                description: 'Invalid code.',
                status: 'error',
              });
            } else {
              setInfo(data);
            }
          } catch(ex) {
              toast({
                title: 'Error',
                description: (ex as Error).toString(),
                status: 'error',
              });
          }
          setIsLoading(false);
        }}
      >
        Search
      </Button>
    </HStack>
  )
}
