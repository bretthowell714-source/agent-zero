# MCP Server Configuration Guide

This guide helps you configure Model Context Protocol (MCP) servers for Agent Zero.

## Quick Start

1. **Use the Template**: Copy `mcp-servers-config-template.json` as a starting point
2. **Enable Servers**: Set `"disabled": false` for servers you want to use
3. **Add API Keys**: Replace placeholder values like `YOUR_API_KEY_HERE` with real keys
4. **Configure Agent Zero**: Update `tmp/settings.json` with your MCP server configuration

## Available MCP Servers (Pre-configured)

### 1. **filesystem** (Recommended)
- **Purpose**: Access and manipulate files in your workspace
- **Status**: Enabled by default
- **Configuration**: Points to `c:\Users\brett\agent-zero`
- **No API keys needed**

### 2. **sequential-thinking** (Recommended)
- **Purpose**: Enhanced reasoning and step-by-step problem solving
- **Status**: Enabled by default
- **No API keys needed**

### 3. **fetch**
- **Purpose**: Fetch web content with custom user agent
- **Status**: Enabled by default
- **No API keys needed**

### 4. **git**
- **Purpose**: Git operations on your repository
- **Status**: Enabled by default
- **Configuration**: Points to `c:\Users\brett\agent-zero`
- **No API keys needed**

### 5. **brave-search**
- **Purpose**: Web search using Brave Search API
- **Status**: Disabled (requires API key)
- **Setup**: Get API key from https://brave.com/search/api/
- **Action**: Replace `YOUR_API_KEY_HERE` in config

### 6. **github**
- **Purpose**: GitHub API operations (issues, PRs, repos)
- **Status**: Disabled (requires token)
- **Setup**: Create token at https://github.com/settings/tokens
- **Scopes needed**: `repo`, `workflow`
- **Action**: Replace `YOUR_GITHUB_TOKEN_HERE` in config

### 7. **sqlite**
- **Purpose**: SQLite database operations
- **Status**: Disabled by default
- **Configuration**: Points to `c:\Users\brett\agent-zero\data\database.db`
- **No API keys needed**

### 8. **docker**
- **Purpose**: Docker container management
- **Status**: Disabled by default
- **Requirements**: Docker Desktop must be running
- **No API keys needed**

## How to Configure for Agent Zero

### Method 1: Via Agent Zero Web UI (Recommended)

1. Start Agent Zero: `python run_ui.py`
2. Open the web interface (usually `http://localhost:50001`)
3. Navigate to Settings → MCP Servers
4. Paste your MCP configuration JSON
5. Save settings
6. Restart Agent Zero

### Method 2: Manual Configuration

1. Edit `tmp/settings.json`
2. Find or add the `"mcp_servers"` key
3. Set the value to a JSON string of your server array:

```json
{
  "mcp_servers": "[{\"name\": \"filesystem\", \"command\": \"npx\", \"args\": [\"--yes\", \"--package\", \"@modelcontextprotocol/server-filesystem\", \"mcp-server-filesystem\", \"c:\\\\Users\\\\brett\\\\agent-zero\"]}]"
}
```

**Note**: The value must be a JSON string (quotes escaped with backslashes)

## Adding New MCP Servers

To add a new MCP server:

1. Find the server package (usually on npm: `@modelcontextprotocol/server-*`)
2. Add to your config following this template:

```json
{
  "name": "my-server",
  "command": "npx",
  "args": [
    "--yes",
    "--package",
    "@modelcontextprotocol/server-mypackage",
    "mcp-server-mypackage"
  ],
  "env": {
    "API_KEY": "your-key-here"
  },
  "disabled": false
}
```

## Testing Your Configuration

After configuring MCP servers:

1. Restart Agent Zero
2. Check the logs for MCP initialization
3. In a chat, ask the agent: "What MCP tools do you have available?"
4. Try using a tool: "Use the filesystem tool to list files"

## Troubleshooting

### Server Won't Start
- Check that Node.js is installed: `node --version`
- Verify npm can access packages: `npm list -g`
- Check logs in Agent Zero console

### API Key Errors
- Ensure no extra spaces in your API keys
- Verify keys are valid and not expired
- Check rate limits for your API

### Path Issues (Windows)
- Use double backslashes: `"c:\\\\Users\\\\brett\\\\..."`
- Or use forward slashes: `"c:/Users/brett/..."`

## Common MCP Server Packages

- `@modelcontextprotocol/server-filesystem` - File operations
- `@modelcontextprotocol/server-github` - GitHub integration
- `@modelcontextprotocol/server-git` - Git operations
- `@modelcontextprotocol/server-brave-search` - Web search
- `@modelcontextprotocol/server-sequential-thinking` - Enhanced reasoning
- `@modelcontextprotocol/server-sqlite` - Database operations
- `@modelcontextprotocol/server-docker` - Container management

## Resources

- [MCP Documentation](https://modelcontextprotocol.io/)
- [Agent Zero MCP Setup](./docs/mcp_setup.md)
- [Available MCP Servers](https://github.com/modelcontextprotocol/servers)
