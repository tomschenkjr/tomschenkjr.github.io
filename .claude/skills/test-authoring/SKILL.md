---
name: test-authoring
description: Write failing unit tests from an implementation brief, matching the host repo's existing test framework and conventions. Use when you are the QA stage of the agent pipeline — tests are written before the implementation exists.
---

# Test authoring skill

You write tests that will **fail right now** and pass once the code lands. This locks the spec.

## Workflow

1. **Read the brief** at `.agent/next-prompt.md`. The *Acceptance criteria* section is your test list.
2. **Detect the framework.** Look at the repo before writing anything:
   - `pyproject.toml` / `setup.cfg` / `pytest.ini` → likely pytest
   - `package.json` → check `devDependencies` and the `test` script: vitest, jest, node:test, etc.
   - `Cargo.toml` → `cargo test` with `#[test]` or `#[cfg(test)]`
   - `go.mod` → `go test ./...` with `_test.go` files
   - `Gemfile` → rspec or minitest
   - When in doubt, look at an existing test file and copy its style.
3. **Place tests where existing tests live.** `tests/`, `__tests__/`, `src/**/*.test.ts`, etc. Don't invent a new convention.
4. **Write the tests.** One test per acceptance criterion, named after the behavior — not after the function. `test_rejects_malformed_email`, not `test_validate_email_2`.
5. **Verify they fail for the right reason.** Run the test command. They should fail with "module not found", "function returns wrong value", or similar — *not* with import errors in unrelated files. If the failure is from a syntax problem in your test, fix it.
6. **Commit** with message `test: add failing tests for issue #<N>`.

## What good tests look like

- **Black-box.** Test behavior visible at the module boundary, not implementation details. The Code agent should be able to refactor freely as long as tests pass.
- **One assertion focus per test.** Multiple `assert`s are fine if they describe the same behavior; if they describe different behaviors, split.
- **Arrange-Act-Assert with whitespace between sections.** Future humans read these.
- **No mocks unless the brief specifies an external boundary.** Real objects > mocks. If you must mock (network, time, randomness), do it minimally.
- **Edge cases the brief implies.** Empty input, boundary values, the failure modes mentioned in *Acceptance criteria*. Don't invent edge cases the brief doesn't suggest — that's scope creep.

## What to skip

- **Don't write integration or e2e tests** unless the repo's test layout makes that the natural fit. This is a unit test stage.
- **Don't modify existing tests** unless the brief explicitly says behavior is changing. If you must, call it out in the commit message.
- **Don't add new test dependencies.** Use what the repo already has. If something is genuinely missing, note it and stop — the brief should be updated.

## Reporting

Before committing, leave a short summary in the commit body: which acceptance criteria map to which test names. This helps the Code agent and human reviewers trace coverage.
