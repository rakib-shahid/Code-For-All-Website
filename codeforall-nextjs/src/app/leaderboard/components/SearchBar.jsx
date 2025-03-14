"use client";
import { Input, Button, Form } from "@heroui/react";
import React from "react";

export const SearchIcon = (props) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

export default function SearchBar({ onSubmit, disabled }) {
  return (
    <Form className="" validationBehavior="native" onSubmit={onSubmit}>
      <div className="flex flex-col md:flex-row w-full max-w-md gap-4 mx-auto mt-2 mb-4 items-center justify-center">
        <Input
          isDisabled={disabled}
          name="search"
          isClearable
          label=""
          placeholder="Search for a user..."
          type="text"
          startContent={<SearchIcon />}
          radius="full"
          validate={(value) => {
            if (value.length == 0) {
              return "Invalid input!";
            }
          }}
          className="w-[80%] md:w-auto"
        />
        <Button
          isDisabled={disabled}
          type="submit"
          className="w-[80%] md:w-auto bg-primary-500 text-white font-semibold"
          radius="full"
        >
          Search
        </Button>
      </div>
    </Form>
  );
}
