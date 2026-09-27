# WorkWorth Product Specification

## 1. Overview

WorkWorth is a React Native mobile application that converts the price of a purchase into the amount of working time required to afford it.

Core idea:

"Don't just ask how much something costs.
Ask how much of your working life it costs."

Example:

Monthly income: ₹70,000

Working days per month: 22

Working hours per day: 8

Hourly value:

₹70,000 / (22 × 8)
= ₹397.73/hour

A ₹12,999 purchase therefore costs approximately:

32 hours 40 minutes of work.

---

# 2. Goals

The project has three primary goals:

1. Learn React Native through a real application.
2. Build a visually impressive portfolio project.
3. Demonstrate practical React Native skills beyond basic CRUD.

The application should demonstrate:

- React Native fundamentals
- Expo
- TypeScript
- navigation
- forms
- validation
- state management
- local persistence
- animations
- gestures
- lists
- reusable components
- responsive UI
- polished UX

---

# 3. Non-Goals

The initial version should NOT include:

- backend
- authentication
- payment system
- cloud database
- social features
- subscriptions
- unnecessary APIs

Everything should work locally.

---

# 4. User Profile

The user provides:

- monthly income
- working days per month
- working hours per day

Hourly income is calculated as:

hourlyRate =
monthlyIncome /
(workingDaysPerMonth × workingHoursPerDay)

Example:

70000 / (22 × 8)
= ₹397.73/hour

---

# 5. Purchase Calculation

For every purchase calculate:

workingHours =
purchasePrice / hourlyRate

workingMinutes =
workingHours × 60

workingDays =
workingHours / workingHoursPerDay

incomePercentage =
purchasePrice / monthlyIncome × 100

All calculations must live inside reusable utility functions.

Do not duplicate these calculations inside screen components.

---

# 6. Screens

## 6.1 Onboarding

Three onboarding screens.

### Screen 1

Headline:

"Your time has a price."

Description:

"WorkWorth shows how much working time your purchases really cost."

### Screen 2

Headline:

"See purchases in hours, not just rupees."

### Screen 3

Headline:

"Know the time behind the price."

CTA:

"Get Started"

Onboarding completion must be persisted locally.

---

# 7. Income Setup

The user enters:

### Monthly income

Example:

₹70,000

### Working days per month

Example:

22

### Working hours per day

Example:

8

Requirements:

- numeric keyboard where appropriate
- validation
- useful placeholders
- clear error messages
- polished UI
- local persistence

---

# 8. Dashboard

The dashboard should prominently display:

"Your time is worth"

₹398

"/ hour"

Also display:

- working days/month
- working hours/month

Primary CTA:

"Calculate a Purchase"

Show recent purchases.

If no purchases exist, show a polished empty state.

---

# 9. Calculate Purchase

Inputs:

- product name
- price

Example:

Product:

Sony WH-1000XM5

Price:

₹29,999

CTA:

"Calculate"

Validation:

- product name is required
- price is required
- price must be greater than zero

After calculation, navigate to the Result screen.

---

# 10. Result Screen

This is the most visually important screen.

Example:

Sony WH-1000XM5

₹29,999

≈ 75 hours 27 minutes

≈ 9.43 working days

Primary message:

"That's 75 hours of your working life."

Show:

- working hours
- working days
- percentage of monthly income

Include a circular/ring visualization representing the purchase cost relative to monthly income.

Actions:

- Save Purchase
- Calculate Another

Use Reanimated for:

- number counting
- progress animation
- card entrance
- subtle transitions

---

# 11. Purchase History

Display saved purchases using FlatList.

Each purchase contains:

- id
- name
- price
- workingHours
- workingMinutes
- workingDays
- incomePercentage
- createdAt

Each history item displays:

Product name

Price

Time cost

Date

Sorting options:

- Newest
- Highest price
- Highest time cost

Allow swipe-to-delete.

Use Gesture Handler and Reanimated.

Persist history locally.

---

# 12. Settings

Settings should allow the user to:

- edit income information
- edit working hours
- reset all local data

A theme toggle may be added later.

Do not add unnecessary settings.

---

# 13. Navigation

Use Expo Router.

Initial flow:

Onboarding
↓
Income Setup
↓
Dashboard
↓
Calculate Purchase
↓
Result
↓
Save
↓
Dashboard / History

Eventually the main application can use tabs:

Home
History
Settings

---

# 14. Design Direction

The visual style should be:

Premium dark-first mobile UI.

Characteristics:

- dark background
- elevated surfaces
- strong typography
- large numerical values
- subtle borders
- restrained gradients
- generous spacing
- modern rounded corners
- minimal icon usage

Avoid:

- generic finance dashboards
- default Expo styling
- excessive glassmorphism
- excessive gradients
- excessive shadows
- excessive icons
- clutter

The central visual language is:

MONEY → TIME

---

# 15. Animation

Use React Native Reanimated.

Important animations:

### Dashboard

Hourly rate smoothly appears.

### Result

Price and working hours animate into view.

### Progress ring

Animate from 0 to the calculated percentage.

### Purchase cards

Use subtle entrance animations.

### Delete

Use swipe-to-delete interaction.

Animations must remain performant on Android.

---

# 16. Reusable Components

Potential reusable components:

- AppButton
- AppInput
- ScreenContainer
- PurchaseCard
- StatCard
- ProgressRing
- AnimatedNumber
- EmptyState
- SectionHeader
- CurrencyInput
- TimeCostDisplay

Only create components when they provide meaningful reuse.

---

# 17. Data Models

## UserProfile

Fields:

- monthlyIncome
- workingDaysPerMonth
- workingHoursPerDay
- hourlyRate

## Purchase

Fields:

- id
- name
- price
- workingHours
- workingMinutes
- workingDays
- incomePercentage
- createdAt

---

# 18. Responsive Design

Support different Android screen sizes.

Do not hardcode the UI for one specific device.

Use flexible layouts.

Handle safe areas correctly.

Handle keyboard interactions correctly for forms.

---

# 19. Accessibility

Important controls should have:

- accessible labels
- sufficient touch targets
- readable text
- adequate contrast

Icons should not be the only way to understand an important action.

---

# 20. Future Features

These are NOT part of the initial implementation.

Possible future additions:

- cost per use
- wishlist
- purchase goals
- spending trends
- purchase comparison
- shareable result cards
- multiple currencies
- home-screen widgets
- AI purchase analysis

Do not implement these unless explicitly requested.

---

# 21. Implementation Order

Build incrementally:

1. Project foundation
2. Design system
3. Navigation
4. Onboarding
5. Income setup
6. Calculation utilities
7. Dashboard
8. Purchase calculation
9. Result screen
10. Local persistence
11. History
12. Gestures
13. Animations
14. Settings
15. Final polish

The app should remain runnable after every major phase.