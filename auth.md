# auth.md

This document describes how AI agents should interact with
**simonaking.com** — the personal website and blog of SimonAKing.

## Authentication

**No authentication or agent registration is required.**

simonaking.com is a public personal content site (blog, about, projects,
gallery). All content is openly readable. There are no protected APIs, no
login, and no per-agent credentials to provision.

## How agents should use this site

- Site index for LLMs: <https://simonaking.com/llms.txt>
- Full blog post index: <https://simonaking.com/blog/llms.txt>
- Machine-readable content catalog: <https://simonaking.com/.well-known/api-catalog>
- Agent skills index: <https://simonaking.com/.well-known/agent-skills/index.json>
- Every blog post has a clean Markdown version at `<post-url>/index.md`.

## Content usage policy

Per this site's `robots.txt` Content-Signal:
`search=yes, ai-input=yes, ai-train=no`.

AI search and real-time grounding/citation are welcome. Using the content to
train models is not authorized. Please attribute to SimonAKing and link the
source URL.

## Contact

- Author: SimonAKing
- GitHub: <https://github.com/SimonAKing>
- X: <https://x.com/simon_aking>
- Email: hi@simonaking.com
