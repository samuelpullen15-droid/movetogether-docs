# MoveTogether Help Center

This repository contains the customer-facing Mintlify docs. `docs.json` controls navigation. README.md is excluded from publication by `.mintignore`.

## Maintaining product accuracy

Use the current app UI for labels and navigation, and backend rules for scoring, access limits, date boundaries, and data handling. Confirm the feature is released on the platform described; merged code alone does not establish availability in every installed mobile version. Keep configuration-dependent support routes and ad offers conditional.

The November 2026 audit used [the 2.2.2 release](https://github.com/samuelpullen15-droid/movetogether/tree/d09d929093d3812ec7c75948c94f116826f1424e) for iPhone and Android behavior. The app's [main branch at the time](https://github.com/samuelpullen15-droid/movetogether/tree/9ab6ca8c5a02ad2873ce7e0a7f8a4fb528dd54de) targeted 2.3.0. Where readers need both sets of instructions, name the version explicitly.

Navigation groups follow what members are trying to do, not the folder names. Folder paths stay fixed because the apps hard-code page URLs. Move a page between nav groups freely, but rename or delete a file only with a redirect in `docs.json`.

| Topic | Sources in the MoveTogether app repository | Canonical help page |
| --- | --- | --- |
| Competition rules | `supabase/functions/_shared/competition-scoring.ts`, current admission/host-limit migrations, iOS create wizard | `competitions/scoring-reference.mdx` |
| Streaks and badges | Current streak recomputation migrations, `StreakCard.swift`, Watch streak views | `engagement/streaks-shields.mdx` |
| Activity sources | `DataSourcesView.swift`, `YourTrackerCard.swift`, `WearableAppleHealthGuide.swift`, `_shared/workout-exercise-minutes.ts` | `getting-started/connect-tracker.mdx`, `getting-started/primary-activity-source.mdx` |
| Challenges | Current daily calibration and monthly standings migrations, Challenges UI | `engagement/daily-challenges.mdx`, `engagement/monthly-challenges.mdx` |
| Coaching | Coach settings/views, `ai-coach`, help lane, coach reward configuration | `social-coach/coach-mo.mdx` |
| Social access | `stream-chat-token`, `stream-communities`, activity API, reaction models | `social-coach/direct-messaging.mdx`, `subscriptions/plans.mdx` |
| Privacy and support | `ios-native/MoveTogether/Support/`, the native support chat on Android and the website, ad consent code, website legal content | `account/ai-and-your-data.mdx`, `account/ads-and-measurement.mdx` |

## Editorial and verification checklist

- Give each task an entry point, prerequisites, concrete steps, expected result, and useful recovery guidance.
- Explain formulas with a worked example and distinguish local dates from UTC resets.
- Keep each detailed rule in one guide and link to it from overviews and troubleshooting. Update the subscription comparison when access changes.
- Check public privacy and refund wording against the policy and implementation. Resolve discrepancies rather than copying an obsolete disclosure.
- Run `mint validate` and `mint broken-links --check-anchors --check-redirects` from this repository, plus the app repository's `scripts/check-product-copy.mjs` with this repository as its target.
- Compile every MDX page, check the diff for whitespace errors, and preview the changed guides in Mintlify before publication. Structural checks do not prove UI parity or hosted rendering.
