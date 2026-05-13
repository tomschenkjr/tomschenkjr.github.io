---
name: planning
description: Read a GitHub issue, produce a concrete change plan as an issue comment, and emit a structured prompt for downstream test-writing and implementation agents. Use whenever you are the PLAN stage of the agent pipeline.
---

# Planning skill

You translate an issue into an actionable plan. You do **not** write production code in this stage.

## Workflow

1. **Read the issue.** Use `gh issue view <n> --comments` to get the title, body, and discussion. Note any prior comments — the requester may have refined the ask.
2. **Survey the code.** Don't read the whole repo. Use `Glob` and `Grep` to find the modules the change touches. Read those files. Stop when you have enough to design the change.
3. **Write the plan comment.** Post one comment on the issue using `gh issue comment <n> --body-file <path>`. Use the format below — humans will read this.
4. **Write the downstream prompt.** Save a self-contained brief to `.agent/next-prompt.md`. Downstream agents will not re-read the issue; this file is their source of truth.

## Plan comment format

```markdown
## Plan (auto-generated)

**Summary.** One sentence: what changes and why.

**Approach.** 2-5 sentences describing the design. Mention key decisions
and the reasoning behind them — not just what, but why this over the
alternatives.

**Files.**
- `path/to/file.ext` — what changes here
- ...

**Tests.** What behaviors the QA agent will encode as tests.

**Risks / out of scope.** Anything a human reviewer should double-check,
and anything explicitly NOT being done.

---
*This plan was drafted by an automated agent. A human will review the
resulting PR.*
```

## next-prompt.md format

```markdown
# Implementation brief — issue #<N>

## Goal
<one paragraph>

## Files to modify or create
- `<path>`: <what to do>

## Acceptance criteria (the QA agent will turn these into tests)
- <criterion 1>
- <criterion 2>

## Constraints
- <library/version pins, style rules, perf or API constraints>

## Out of scope
- <things to explicitly skip>
```

## Quality bar

- **Concrete file paths**, not vague areas. If you can't name the file, you haven't read enough yet.
- **Acceptance criteria are testable.** "Handle errors gracefully" is not; "Return 422 with `{error: 'invalid_email'}` when email is malformed" is.
- **Match repo conventions.** Glance at existing code style, test layout, and naming before committing to an approach.
- **Stay in scope.** If the issue is ambiguous, pick the narrowest reasonable interpretation and note alternatives under *Out of scope*. Don't expand the work.

## When to bail out

If the issue is incoherent, depends on missing context, or asks for something the agent shouldn't autonomously do (security-sensitive changes, irreversible data migrations, dependency bumps that aren't pinned in the request), post a comment explaining why and **do not** write `.agent/next-prompt.md`. The downstream stages will fail fast on the missing file, which is the desired behavior.
