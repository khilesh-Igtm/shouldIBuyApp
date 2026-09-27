# WorkWorth - Development Instructions

## Project

WorkWorth is a React Native mobile application built with Expo and TypeScript.

The app converts the monetary price of a purchase into the amount of working time required to afford it.

Core concept:

"Don't just ask how much something costs.
Ask how much of your working life it costs."

This is primarily a learning and portfolio project.

The goal is to demonstrate strong practical React Native skills through a polished mobile application.

---

# Tech Stack

Use:

- React Native
- Expo
- TypeScript
- Expo Router
- Zustand
- React Native Reanimated
- React Native Gesture Handler
- AsyncStorage
- React Native SVG when required

Prefer Expo-compatible packages.

Do not introduce a new dependency unless it provides a clear and meaningful benefit.

---

# Development Philosophy

This project is being built to learn React Native properly.

Prefer:

- simple solutions
- readable code
- reusable components
- clear separation of concerns
- strong TypeScript typing
- maintainable architecture

Avoid:

- unnecessary abstraction
- overengineering
- giant components
- duplicated business logic
- unnecessary dependencies

---

# Architecture

Separate the application into:

- screens/routes
- reusable UI components
- business logic
- state management
- utilities
- types

Business calculations must not be duplicated inside screen components.

Create reusable utility functions for calculations.

Keep global state limited to data that actually needs to be shared between screens.

Use local React state for temporary UI state where appropriate.

---

# TypeScript

Use TypeScript throughout the project.

Rules:

- Avoid `any`
- Prefer explicit types for domain models
- Avoid unnecessary type assertions
- Create reusable interfaces/types
- Keep types readable
- Do not bypass TypeScript just to make code compile

---

# State Management

Use Zustand for shared application state.

Use local React state for:

- temporary form values
- input focus
- temporary UI state
- component-specific state

Persist important user data locally using AsyncStorage.

Do not put every state variable into Zustand.

---

# UI/UX

The application should feel like a premium modern mobile application.

Design direction:

- dark-first
- minimal
- premium
- typography-focused
- strong visual hierarchy
- generous spacing
- subtle borders
- elegant cards
- restrained gradients
- polished micro-interactions

The application should NOT look like:

- a beginner tutorial
- a default Expo application
- a generic dashboard
- a basic calculator
- a CRUD demo

The central visual language is:

MONEY → TIME

The user should immediately understand:

₹12,999

=

32 hours 39 minutes

of work.

---

# Animation

Use React Native Reanimated for important animations.

Animations should be:

- smooth
- subtle
- fast
- purposeful

Good examples:

- number counting
- progress ring
- screen entrance
- card entrance
- button interaction
- swipe-to-delete

Avoid excessive animation.

Do not sacrifice usability for visual effects.

Prefer performant animations that avoid unnecessary JavaScript-thread work.

---

# Performance

The application should run smoothly on mid-range Android devices.

Pay attention to:

- unnecessary re-renders
- FlatList performance
- animation performance
- unnecessary calculations
- excessive component nesting

Do not prematurely optimize simple code.

---

# Responsive Design

The application must work across different Android screen sizes.

Do not design for only one device.

Avoid unnecessary fixed widths and heights.

Use safe-area handling where required.

---

# Accessibility

Use:

- readable text sizes
- sufficient contrast
- meaningful accessibility labels
- reasonable touch target sizes

Important actions should be understandable without relying only on icons.

---

# Dependencies

Before installing a package:

1. Check whether Expo already provides the required functionality.
2. Check whether an existing installed dependency can solve the problem.
3. Only then introduce a new package.

Do not install multiple libraries that solve the same problem.

---

# Code Changes

Before modifying existing code:

1. Inspect the relevant files.
2. Understand the existing implementation.
3. Follow the architecture already established.
4. Make the smallest clean change required.

Do not rewrite working code unnecessarily.

Do not modify unrelated files.

---

# Development Workflow

Work incrementally.

After each major feature:

1. Keep the application runnable.
2. Check for TypeScript errors.
3. Check for obvious runtime issues.
4. Explain what changed.
5. Mention the important React Native concepts used.

Do not implement the entire application in one giant change.

---

# AI Development Rules

Before implementing a feature:

1. Read this file.
2. Read `docs/PRODUCT_SPEC.md`.
3. Inspect the current project.
4. Understand what has already been implemented.
5. Implement only the requested phase.

Do not assume a feature does not exist before inspecting the project.

Do not recreate existing components.

Do not generate duplicate utilities.

If the specification and existing implementation conflict, explain the conflict before making a major architectural change.

---

# Learning Requirement

This project is also a learning project.

When implementing a significant feature, provide a concise explanation of:

- what was implemented
- which React Native concepts were used
- which files changed
- why the implementation was structured that way

Do not provide unnecessary long explanations unless requested.

---

# Important

Do not add:

- backend
- authentication
- payments
- cloud database
- unnecessary APIs
- unnecessary AI features

Everything in the initial version should work locally.

Follow `docs/PRODUCT_SPEC.md` as the product source of truth.