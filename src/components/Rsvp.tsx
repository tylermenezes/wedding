import { useState, useEffect } from 'react';
import {
  ChakraProps,
  Box,
  Text,
  HStack,
  Input,
  Button,
  Radio,
  RadioGroup,
  PinInput,
  PinInputField,
  useToast,
} from "@chakra-ui/react";

const API = 'https://script.google.com/macros/s/AKfycbzFf7TY2wl__vrJbaHRhsF7URmQnP3MBs0FWh3IzEaI4NWSJFL4iicbY7upToXUj7Yigw/exec';

type APIResponse = { success: false } | {
  success: true
  name: string
  max: number
  rsvp: number | null
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
        <HStack justifyContent="space-around">
          <Radio value="0" size="lg" colorScheme={colorScheme}>
            No one
          </Radio>
          {Array.from(Array(max).keys()).map((num) => (
            <Radio key={num} value={`${num + 1}`} size="lg" colorScheme={colorScheme}>
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
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <Box {...props}>
        <Text>Thank you, we have updated your RSVP for {rsvp} attendees.</Text>
      </Box>
    )
  }

  if (info?.success ) {
    return (
      <Box {...props}>
        <Text mb={4} fontWeight="bold" fontSize="lg">{info.name}</Text>
        <RsvpNumberPicker
          colorScheme="purple"
          mb={4}
          max={info.max}
          onChange={setRsvp}
          defaultValue={info.rsvp}
        />
        <Button
          colorScheme="purple"
          isLoading={isLoading}
          disabled={typeof rsvp === 'undefined'}
          onClick={async () => {
            setIsLoading(true);
            try {
              const resp = await fetch(`${API}?code=${encodeURIComponent(code)}&rsvp=${encodeURIComponent(rsvp!)}`);
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
                  description: ex.toString(),
                  status: 'error',
                });
            }
            setIsLoading(false);
          }}
        >
          Submit
        </Button>
      </Box>
    )
  }

  return (
    <HStack {...props}>
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
                description: ex.toString(),
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
