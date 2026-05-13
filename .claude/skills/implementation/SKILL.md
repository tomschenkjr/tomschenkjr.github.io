---
name: implementation
description: Implement an approved plan against pre-written failing tests, iterating until the test suite is green. Use when you are the CODE/QC stage of the agent pipeline.
---

# Implementation skill

Your job is narrow: make the failing tests pass without breaking the passing ones, following the plan.

## Workflow

1. **Read the brief** (`.agent/next-prompt.md`) and **the failing tests**. The tests are the contract; the brief is the rationale.
2. **Run the full test suite first** to capture the baseline. Note which tests currently fail and which pass. You only want to flip the failing ones to passing.
3. **Detect the toolchain** (same checks as the test-authoring skill).
4. **Implement the smallest change that satisfies the tests + brief.** Edit only the files the plan named, plus their direct dependencies. If you find yourself touching unrelated files, stop and reconsider — that's scope drift.
5. **Run tests after each meaningful change.** Commit when a logical unit is green.
6. **Loop**: if tests fail, read the failure, fix, re-run. Hard cap at **5 fix attempts** per stuck test. After that, leave a clear note in the commit message describing what you tried and what's still broken — humans take it from there.

## Code quality rules

- **Match the codebase's style.** Look at a neighboring file before writing yours. Indentation, import order, naming, error-handling patterns — copy them.
- **No new dependencies** unless the brief authorizes them. If a dep is truly needed, stop and report.
- **No tracked formatting churn.** If the repo uses a formatter (prettier, black, ruff format, gofmt), run it once at the end. Don't reformat unrelated files.
- **No `// TODO` or `# FIXME` left behind in shipped code.** If you couldn't finish a piece, the test for it should still be failing and that's how you signal it.

## When NOT to change the tests

The default is: tests written by the QA agent are the spec. Don't relax them. Three exceptions:

1. A test asserts something the brief didn't ask for (QA agent overreached).
2. A test is technically wrong (typo, wrong import, can't possibly pass).
3. A test asserts an implementation detail (`assert mock.called_with(...)`) when the brief only specified behavior.

If you change a test, **say so in the commit body** with the reason. The PR reviewer will look closely at these diffs.

## QC: running the suite

- Use the exact command the repo uses in CI. Check `.github/workflows/` for the canonical invocation. Don't invent one.
- Run **all** tests, not just the new ones. Regressions in untouched modules are still your problem.
- If the suite is slow, you can run a focused subset during the fix loop, but the **final** run before the "tests pass" commit must be the full suite.

## Commit hygiene

- Small commits with imperative-mood messages: `add email validator`, `handle empty input in parser`.
- The final commit on the branch should be the one that makes the suite green. Reviewers will read history top-down.
- Never `git push --force` to `dev`. The workflow handles the push.

## When to give up

If after 5 fix attempts a test is still red, or you find the plan is structurally wrong (e.g., the proposed API can't satisfy a stated requirement), stop. Commit what you have, write a final commit `wip: stuck on <X>` explaining the blocker. The pipeline will leave the branch behind and label the issue `agent-failed` so a human can take over.
