# Security Spec

## Data Invariants
1. Invites are created by Admins and consumed once.
2. Users are identified by their invite code (capability string).
3. Orders belong to a user identified by an invite code.

## The Test Runner
Tests skipped due to prototype constraint without Google Auth.

## Delta Report
Given the requirement to support multi-device syncing strictly via an "invite code" string without a backend for Custom Auth, and the requirement to support an Admin panel in the same frontend, we use anonymous auth. However, locking the invite code to a specific Anonymous UID breaks multi-device support. 

Therefore, Firebase Security Rules are scoped down to Schema Validation only.
