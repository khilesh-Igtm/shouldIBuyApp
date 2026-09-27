import React from 'react';
import { Redirect } from 'expo-router';

export default function InitialRoute() {
  // Navigation scaffolding: Redirects to onboarding flow for verification.
  // In subsequent phases, this will read profile state from storage and redirect to (tabs) or onboarding.
  return <Redirect href="/onboarding/index" />;
}
