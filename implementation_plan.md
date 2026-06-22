# Implementation Plan: Firebase CMS Integration

This plan outlines the steps to build an all-powerful CMS for the portfolio website using Firebase. The CMS will be gated by Google Authentication and will allow the user to modify projects, hero content, contact information, and studio details directly from an admin dashboard.

## User Review Required

> [!IMPORTANT]
> The transition from hardcoded data to a dynamic CMS means the site will need to fetch data from Firebase on load. Please review the **Open Questions** below, particularly regarding how we handle image uploads and loading states.

## Open Questions

> [!WARNING]
> 1. **Image Storage**: The current `projects.ts` uses external URLs (e.g., Pexels) for images. Do you want to continue pasting external URLs into the CMS, or should we integrate **Firebase Storage** so you can upload image files directly from your computer?
> 2. **Preloader Integration**: The site currently has a preloader that waits for hardcoded assets to load. With a CMS, we will need to fetch the project data from Firestore *first*, and then preload those dynamic images. This will slightly increase the initial load time. Is this acceptable?
> 3. **Admin Security**: Google Auth will let anyone with a Google account sign in. We should restrict write access via Firestore Security Rules to *only* your specific Google email address. Please confirm the email address you will use to manage the site.

## Proposed Changes

---

### 1. Firebase Initialization & Configuration

We will install the Firebase SDK and set up the core connection.

#### [NEW] `src/lib/firebase.ts`
- Initialize Firebase App using environment variables.
- Export `auth` (Firebase Authentication) and `db` (Firestore).
- Export a pre-configured `GoogleAuthProvider`.

#### [NEW] `.env.local`
- Store Firebase configuration keys.

---

### 2. Authentication Gateway

Create the login system and a protected route for the CMS dashboard.

#### [NEW] `src/features/admin/AdminLogin.tsx`
- A login screen featuring a "Sign in with Google" button using `signInWithPopup`.

#### [NEW] `src/features/admin/AdminLayout.tsx`
- An authentication guard wrapper. If a user is not logged in, they are redirected to `AdminLogin`.
- Includes a logout button and a sidebar navigation for the CMS (e.g., "Projects", "Site Settings").

---

### 3. CMS Dashboard (The "All-Powerful" Interface)

Build the UI where the user can actually make changes.

#### [NEW] `src/features/admin/dashboard/ProjectList.tsx`
- Displays a table/list of all projects fetched from Firestore.
- Buttons to create a new project, edit, or delete existing ones.

#### [NEW] `src/features/admin/dashboard/ProjectEditor.tsx`
- A complex form corresponding to the `Project` interface (found in `projects.ts`).
- Inputs for `title`, `subtitle`, `hero`, `intro`, `challenge`, `approach`, `solution`.
- Dynamic array fields for `tags`, `credits`, and `blocks` (handling image, quote, and text block types).

#### [NEW] `src/features/admin/dashboard/SiteSettingsEditor.tsx`
- A form to manage global text (e.g., Hero headline, Studio bio, Contact email/links).

---

### 4. Frontend Integration (Replacing Hardcoded Data)

Refactor the public-facing website to consume Firestore data instead of static files.

#### [NEW] `src/features/shared/hooks/useSiteData.ts`
- A global hook or context provider that subscribes to Firestore on application load.

#### [MODIFY] `src/features/work/projects.ts`
- Remove the hardcoded `PROJECTS` array.
- Convert helper functions (`getProject`, `getNextProject`) to work with the dynamically loaded array from the Firebase Context.

#### [MODIFY] `src/features/home/Hero.tsx`
- Replace hardcoded text ("Designing the quiet spaces between noise", "A small, deliberately slow design studio...") with data pulled from `useSiteData()`.

#### [MODIFY] `src/features/preloader/usePreloader.ts`
- Update the preloader logic to first wait for the Firestore `projects` fetch promise to resolve before attempting to preload the images.

#### [MODIFY] `src/app/shell/Layout.tsx` & Route Config
- Add `/admin/*` routes to the `react-router-dom` configuration, pointing to the `AdminLayout`.

---

## Verification Plan

### Automated Tests
- N/A for this phase, though we will ensure no TypeScript errors are introduced with the dynamic data structures.

### Manual Verification
1. **Auth Test**: Attempt to visit `/admin`. Verify it redirects to `/login`. Sign in with Google and verify successful redirection to the dashboard.
2. **CMS Test**: Create a dummy project in the CMS and publish it. Edit global site settings.
3. **Frontend Test**: Visit the home page and `/work` page. Verify the newly created project appears and the preloader correctly waits for its images to load. Verify the Hero text matches the CMS.
