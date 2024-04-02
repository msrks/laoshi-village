"use client";

import { Calendar } from "@/components/ui/calendar";
import { Dispatch, SetStateAction, useState } from "react";

export function CalendarDemo({
  dateList,
  date,
  setDate,
}: {
  dateList: string[];
  date: Date[] | undefined;
  setDate: Dispatch<SetStateAction<Date[] | undefined>>;
}) {
  return (
    <Calendar
      mode="multiple"
      selected={date}
      onSelect={setDate}
      disabled={(date) => !dateList.includes(date.toISOString().split("T")[0])}
      className="rounded-md border"
    />
  );
}
