"use client";
import React from "react";
import env from "./env";

const TestEnv = () => {
  return (
    <div>
      <h1>Appwrite Config Test</h1>
      <p>Endpoint: {env.appwrite.endpoint}</p>
      <p>Project ID: {env.appwrite.projectId}</p>
    </div>
  );
};

export default TestEnv;
