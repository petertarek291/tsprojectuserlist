interface user {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  phone: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

let data: user[] = [
  {
    gender: "male",
    name: { title: "Mr", first: "Christoffer", last: "Rasmussen" },
    phone: "42509531",
    id: { name: "CPR", value: "290854-3014" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/12.jpg",

      medium: "https://randomuser.me/api/portraits/med/men/12.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Sam", last: "Brewer" },
    phone: "0119463 485 7627",
    id: { name: "NINO", value: "MH 60 27 30 H" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/32.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/32.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/32.jpg",
    },
    nat: "GB",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "آوین", last: "رضایی" },
    phone: "011-27774308",
    id: { name: "", value: null },
    picture: {
      large: "https://randomuser.me/api/portraits/women/63.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/63.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/63.jpg",
    },
    nat: "IR",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Yatin", last: "Adiga" },
    phone: "7104267904",
    id: { name: "UIDAI", value: "310367814929" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/27.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/27.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/27.jpg",
    },
    nat: "IN",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Lucas", last: "Olsen" },
    phone: "08332508",
    id: { name: "CPR", value: "090465-9419" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/28.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/28.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/28.jpg",
    },
    nat: "DK",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Vanesa", last: "Carmona" },
    phone: "(633) 760 0488",
    id: { name: "NSS", value: "37 87 96 8971 7" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/85.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
    },
    nat: "MX",
  },
  {
    gender: "male",
    name: { title: "Mr", first: "Thomas", last: "Johnston" },
    phone: "07-4744-7094",
    id: { name: "TFN", value: "285192839" },
    picture: {
      large: "https://randomuser.me/api/portraits/men/80.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
    },
    nat: "AU",
  },
  {
    gender: "female",
    name: { title: "Miss", first: "Lilja", last: "Ollila" },
    phone: "03-305-999",
    id: { name: "HETU", value: "NaNNA770undefined" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/23.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/23.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/23.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: { title: "Mrs", first: "Margarete", last: "Höfling" },
    phone: "0489-1013547",
    id: { name: "SVNR", value: "59 181252 H 610" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/45.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/45.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/45.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: { title: "Ms", first: "Leslie", last: "Reynolds" },
    phone: "(236) 674-6233",
    id: { name: "SSN", value: "671-02-6826" },
    picture: {
      large: "https://randomuser.me/api/portraits/women/58.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/58.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/58.jpg",
    },
    nat: "US",
  },
];
export default data;
