import { Button, ButtonProps } from '@chakra-ui/react';
import config from '../config';

export default function HotelsButton(props: ButtonProps) {
  const cityCode = encodeURIComponent(`${config.venue.address.city},${config.venue.address.stateCode}`);
  const starts = config.schedule.starts.setZone(config.tz).minus({ days: 1 }).toISODate();
  const ends = config.schedule.ends.setZone(config.tz).plus({ days: 1 }).toISODate();
  const url = `https://www.kayak.com/hotels/${cityCode}/${starts}/${ends}/2guests?sort=rank_a`;

  return <Button as="a" target="_blank" {...props} href={url}>Hotels &raquo;</Button>
}
