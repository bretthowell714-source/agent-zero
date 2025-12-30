# Copilot Instructions for Agent Zero

## Overview
Agent Zero is a dynamic, customizable agentic framework designed to grow and learn with its user. It emphasizes transparency, extensibility, and multi-agent cooperation. This document provides essential guidance for AI coding agents to be productive in this codebase.

## Architecture
- **Core Components:**
  - `agents/`: Contains various agent implementations (e.g., `default`, `developer`, `hacker`). Each folder represents a specific agent type with unique behaviors.
  - `prompts/`: Stores system prompts and communication templates. Key files include `agent.system.main.md` and `agent.system.behaviour.md`.
  - `python/tools/`: Default tools for agent functionality. Extend or modify these to add new capabilities.
  - `webui/`: Web-based user interface for interacting with agents.
  - `conf/`: Configuration files, including `model_providers.yaml` for external integrations.
  - `logs/`: Stores session logs, including HTML outputs of terminal interactions.

- **Data Flow:**
  - Agents communicate hierarchically, with `Agent 0` as the root agent controlled by the user.
  - Prompts define agent behavior and communication patterns.
  - Tools and instruments enable dynamic task execution.

- **Customization:**
  - Modify prompts in `prompts/` to change agent behavior.
  - Add new tools in `python/tools/`.
  - Use `instruments/` for custom functions and procedures.

## Developer Workflows
- **Setup:**
  - Install dependencies using `requirements.txt` or `requirements.dev.txt`.
  - Use Docker for isolated environments:
    ```bash
    docker pull agent0ai/agent-zero
    docker run -p 50001:80 agent0ai/agent-zero
    ```
  - Access the Web UI at `http://localhost:50001`.

- **Testing:**
  - Tests are located in the `tests/` directory. Run them using:
    ```bash
    pytest
    ```

- **Debugging:**
  - Logs are saved in the `logs/` folder for every session.
  - Use the terminal interface for real-time debugging and intervention.

## Project-Specific Conventions
- **Prompts:**
  - All agent behavior is defined in `prompts/`. Key files include:
    - `agent.system.main.md`: Main system prompt.
    - `agent.system.behaviour.md`: Default behavior definitions.
  - Follow the existing structure when adding new prompts.

- **Tools:**
  - Default tools are in `python/tools/`. Extend these to add functionality.
  - Instruments in `instruments/` allow for reusable custom logic.

- **Multi-Agent Communication:**
  - Agents communicate hierarchically. Use prompts to define communication protocols.

## Integration Points
- **External Dependencies:**
  - Managed via `requirements.txt`.
  - Configure model providers in `conf/model_providers.yaml`.

- **Cross-Component Communication:**
  - Prompts and tools are the primary integration points.
  - Use the `logs/` folder to trace interactions and debug issues.

## Examples
- **Adding a New Tool:**
  1. Create a Python file in `python/tools/`.
  2. Define the tool logic.
  3. Update the relevant prompt in `prompts/` to include the new tool.

- **Modifying Agent Behavior:**
  1. Edit the system prompt in `prompts/agent.system.main.md`.
  2. Test changes using the terminal or Web UI.

## References
- [README.md](../README.md): Project overview and key features.
- [docs/](../docs/): Detailed documentation for installation, usage, and development.
- [prompts/](../prompts/): System prompts and templates.
- [python/tools/](../python/tools/): Default tools for agent functionality.

For further assistance, refer to the [documentation](../docs/README.md) or contact the development team.