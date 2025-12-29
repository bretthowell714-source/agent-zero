# Agent Zero Setup Guide for Termux

This guide will help you set up and run Agent Zero on Android using Termux.

## Prerequisites

1. Install **Termux** from F-Droid (recommended) or Google Play Store
2. Install **Termux:API** (optional, for additional features)

## Step 1: Update Termux Packages

```bash
pkg update && pkg upgrade
```

## Step 2: Install Required System Packages

```bash
# Install Python and essential tools
pkg install python python-pip git

# Install build dependencies (needed for some Python packages)
pkg install build-essential binutils clang cmake

# Install additional utilities
pkg install openssl libffi libjpeg-turbo
```

## Step 3: Grant Storage Permission

Allow Termux to access your device storage:

```bash
termux-setup-storage
```

This will prompt you to grant storage permissions on your Android device.

## Step 4: Clone or Copy Agent Zero

If you haven't already, clone the repository:

```bash
cd ~
git clone https://github.com/frdel/agent-zero.git
cd agent-zero
```

Or if you already have the code, navigate to the agent-zero directory.

## Step 5: Install Python Dependencies

Some packages may require special handling in Termux:

```bash
# Try installing requirements normally first
pip install -r requirements.txt

# If you get errors, try installing problematic packages individually:
pip install --no-build-isolation chromadb
pip install --no-build-isolation grpcio
```

### Common Installation Issues in Termux

**If `grpcio` fails:**
```bash
GRPC_PYTHON_BUILD_SYSTEM_OPENSSL=1 pip install grpcio
```

**If `onnxruntime` fails:**
```bash
# Try without this package (some features may be limited)
pip install -r requirements.txt --no-deps
pip install aiohttp aiosignal annotated-types ansio anthropic anyio # (continue with other packages)
```

**Memory errors during installation:**
```bash
# Install packages one at a time with lower memory usage
pip install --no-cache-dir -r requirements.txt
```

## Step 6: Configure API Keys

Create your `.env` file:

```bash
cp example.env .env
nano .env  # or use: vi .env
```

Add your API keys:
```
API_KEY_OPENAI=your-openai-key-here
API_KEY_ANTHROPIC=your-anthropic-key-here
API_KEY_GROQ=your-groq-key-here
API_KEY_PERPLEXITY=your-perplexity-key-here
```

Press `Ctrl+X`, then `Y`, then `Enter` to save in nano.

## Step 7: Configure Model Selection

Edit `main.py` to choose your preferred AI model:

```bash
nano main.py
```

Find line ~14 and uncomment your preferred model:

```python
# For Groq (free tier available):
chat_llm = models.get_groq_llama70b(temperature=0.2)

# For OpenAI:
# chat_llm = models.get_openai_gpt35()

# For Anthropic:
# chat_llm = models.get_anthropic_sonnet()

# For local Ollama (if installed):
# chat_llm = models.get_ollama_dolphin()
```

## Step 8: Run Agent Zero

```bash
python main.py
```

## Termux-Specific Considerations

### Limited System Access
- Agent Zero's ability to execute system commands may be limited in Termux
- Some Linux commands may not be available
- Root access is not available unless your device is rooted

### Battery Optimization
Add Termux to battery optimization exceptions to prevent it from being killed:
- Settings → Battery → Battery Optimization → All Apps → Termux → Don't Optimize

### Keep Screen On (Optional)
Install Termux:Boot and Termux:Wake Lock to keep sessions running:
```bash
pkg install termux-services
```

### Recommended API Keys for Termux

**Groq** is highly recommended for Termux because:
- Free tier available
- Fast inference
- Lower resource usage than local models
- Good for mobile devices

Get a free Groq API key at: https://console.groq.com/

### Storage Locations in Termux

- Termux home: `~/` or `/data/data/com.termux/files/home/`
- Shared storage: `~/storage/shared/`
- Downloads: `~/storage/downloads/`

## Troubleshooting

### Package Installation Fails
```bash
# Update pip and setuptools
pip install --upgrade pip setuptools wheel

# Try installing with --user flag
pip install --user -r requirements.txt
```

### Out of Memory
```bash
# Close other apps
# Install packages individually
# Use a lighter model (Groq instead of local Ollama)
```

### Import Errors
```bash
# Verify installation
python -c "import langchain; import anthropic; import openai; print('OK')"

# Reinstall problematic package
pip uninstall <package-name>
pip install <package-name>
```

### Terminal Freezes
- Press `Ctrl+C` to interrupt
- Press `Ctrl+D` to exit
- Type `exit` to quit Agent Zero

## Performance Tips for Termux

1. **Use External API Models** (Groq, OpenAI, Anthropic) instead of local models
2. **Close Background Apps** to free up RAM
3. **Use Lighter Models** (GPT-3.5, Groq Llama, Claude Haiku)
4. **Limit Memory-Intensive Operations**
5. **Monitor Battery** - AI operations consume significant battery

## Example First Commands

Once Agent Zero is running, try:

```
> What is the current date and time?
> List files in the current directory
> Search for the latest news on AI
> Create a simple Python script to calculate fibonacci numbers
```

Type `exit` to quit.

## Known Limitations in Termux

- Cannot install system packages (apt/yum)
- Limited process management
- No systemd/service management
- Some Python packages may not compile
- Large models (Ollama) may be too resource-intensive

## Recommended Configuration for Mobile

Edit `prompts/agent.system.md` to tell Agent Zero about its Termux environment:

Add near the beginning:
```
You are running in a Termux environment on Android. You have limited system privileges.
Available package manager: pkg (not apt)
You cannot use sudo or install system packages.
Focus on Python-based solutions and API calls rather than system commands.
```

This helps Agent Zero understand its limitations and work more effectively in Termux.

## Getting Help

- Agent Zero GitHub: https://github.com/frdel/agent-zero
- Termux Wiki: https://wiki.termux.com/
- Termux GitHub: https://github.com/termux/termux-app

---

**Happy coding with Agent Zero on Android!** 🤖📱
