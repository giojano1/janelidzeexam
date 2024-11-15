//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let name1: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number) {
  return a * b;
}

// მაგალითი 4

const user1: { id: number; name: string } = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

// პასუხი: სხვა მნიშვნელობას ვერ მიიღებს guest ის გარდა

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {
type Config = {
  theme?: string;
  options?: {
    fontSize: number;
    layout: null;
  };
  tester?: string;
};

const config1: Config = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

const config2: Config = {
  theme: "dark",
};

const config3: Config = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =
type MixedArray =
  | number
  | string
  | boolean
  | { name?: string; isValid?: boolean };
const array1: MixedArray[] = [42, "hello", { name: "Alice" }];
const array2: MixedArray[] = ["apple", true, { isValid: false }];
const array3: MixedArray[] = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};
// ფუნქციების ტიპიზაცია მეორე ფუნქცია იღებს არგუმენტს რომელიც აუცილებლად სტრინგია

// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
