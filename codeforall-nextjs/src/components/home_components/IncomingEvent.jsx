"use client";
import React from "react";
import { format, parseISO } from "date-fns";
import "./IncomingEvents.css";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  Card,
  CardHeader,
  CardBody,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Button,
  Image,
  Tooltip,
} from "@heroui/react";

export default function IncomingEvent({
  images,
  title,
  description,
  location,
  timestamp,
  rsvpLink,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const parsedDate = parseISO(timestamp);
  const month = format(parsedDate, "MMMM");
  const date = format(parsedDate, "dd");
  const full = format(parsedDate, "EEEE, MMMM do yyyy");
  const time = format(parsedDate, "h:mm a");

  return (
    <>
      <Card
        className="w-full mx-auto dark bg-gradient-to-br from-violet-600 to-slate-50 shadow-neon-purple-initial hover:shadow-neon-purple-hover transition-shadow duration-500 ease-in-out"
        isPressable
        onPress={onOpen}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-4xl text-white">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-4">
          <Image
            alt={`${title} image`}
            className="object-cover rounded-xl"
            src={images}
          />
        </CardBody>
      </Card>

      <Drawer
        size="xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="dark"
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="absolute top-0 inset-x-0 z-50 flex flex-row gap-2 px-2 py-2 border-b border-default-200/50 justify-between bg-content1/50 backdrop-saturate-150 backdrop-blur-lg">
                <Tooltip content="Close">
                  <Button
                    isIconOnly
                    className="text-default-400"
                    size="sm"
                    variant="light"
                    onPress={onClose}
                  >
                    <svg
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
                    </svg>
                  </Button>
                </Tooltip>
              </DrawerHeader>

              <DrawerBody className="pt-16">
                <div className="flex w-full justify-center items-center pt-4">
                  <Image
                    alt="Event image"
                    className="rounded-lg"
                    src={images}
                    style={{ maxHeight: "400px", width: "auto" }}
                  />
                </div>

                <div className="flex flex-col gap-4 py-6 px-4">
                  <h1 className="text-3xl font-bold leading-7 text-white">
                    {title}
                  </h1>

                  <div className="flex gap-3 items-center">
                    <div className="flex items-center justify-center border-1 border-default-200/50 rounded-small w-11 h-11">
                      <svg
                        className="text-default-500"
                        height="20"
                        viewBox="0 0 16 16"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          fill="none"
                          fillRule="evenodd"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                        >
                          <path d="M2 6.854C2 11.02 7.04 15 8 15s6-3.98 6-8.146C14 3.621 11.314 1 8 1S2 3.62 2 6.854" />
                          <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm text-default-500">{location}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    {/* Date Box */}
                    <div className="flex-none border-1 border-default-200/50 rounded-small text-center w-11 overflow-hidden">
                      <div className="text-tiny bg-default-100 py-0.5 text-default-500">
                        {month.substring(0, 3)}
                      </div>
                      <div className="flex items-center justify-center font-semibold text-medium h-6 text-default-500">
                        {date}
                      </div>
                    </div>
                    {/* Date Details */}
                    <div className="flex flex-col gap-0.5">
                      <p className="text-medium text-foreground font-medium text-white">
                        {full}
                      </p>
                      <p className="text-small text-default-500">{time}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3">
                    <span className="text-medium font-medium text-white">
                      About the event
                    </span>
                    <p className="text-lg text-foreground text-white">
                      {description}
                    </p>
                  </div>

                  <Button
                    className="mt-4 mx-auto w-[50%] py-8 text-lg font-semibold"
                    color="primary"
                    onPress={() => window.open(rsvpLink, "_blank")}
                  >
                    RSVP
                  </Button>
                </div>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
