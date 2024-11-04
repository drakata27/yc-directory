"use client";

import { Input } from "@/components/ui/input";
import React from "react";

const StartupForm = () => {
  return (
    <form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>

        <Input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        />
      </div>
    </form>
  );
};

export default StartupForm;
