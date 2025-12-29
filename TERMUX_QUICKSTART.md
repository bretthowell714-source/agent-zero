# Agent Zero - Termux Quick Start ⚡

Get Agent Zero running on your Android device in ~5 minutes!

## Fast Track Installation

### 1. One-Line Setup (Automated)

```bash
cd ~/agent-zero && bash termux-setup.sh
```

This script will:
- Update Termux packages
- Install Python and dependencies
- Create .env file
- Set up everything automatically

**Time:** ~10-15 minutes (depending on internet speed)

### 2. Add Your API Key

After setup completes, add your API key:

```bash
nano .env
```

Add your Groq API key (free tier available):
```
API_KEY_GROQ=your-groq-api-key-here
```

Save: `Ctrl+X` → `Y` → `Enter`

**Get free Groq API key:** https://console.groq.com/

### 3. Configure Model (Optional)

Edit main.py to use Groq:

```bash
nano main.py
```

Change line ~14 to:
```python
chat_llm = models.get_groq_llama70b(temperature=0.2)
```

### 4. Run Agent Zero!

```bash
python main.py
```

Type `exit` to quit.

---

## Manual Installation (If Script Fails)

```bash
# 1. Update packages
pkg update && pkg upgrade

# 2. Install essentials
pkg install python python-pip git

# 3. Install Python packages
pip install --no-cache-dir python-dotenv anthropic openai groq langchain langchain-openai langchain-groq langchain-anthropic ansio

# 4. Create .env file
cp example.env .env
nano .env  # Add API keys

# 5. Run
python main.py
```

---

## Recommended API Keys for Termux

### Best: Groq (FREE + FAST)
- ✅ Free tier available
- ✅ Very fast inference
- ✅ Low resource usage
- ✅ Perfect for mobile
- 🔗 Sign up: https://console.groq.com/

### Alternative: OpenAI
- Paid (pay-per-use)
- GPT-3.5 is affordable
- 🔗 https://platform.openai.com/

### Alternative: Anthropic Claude
- Paid (pay-per-use)
- Claude Haiku is efficient
- 🔗 https://console.anthropic.com/

---

## First Commands to Try

```
> What is the current time?
> Show me the files in this directory
> Write a Python script to calculate prime numbers
> Search for latest AI news
```

---

## Quick Troubleshooting

### Can't install packages?
```bash
pip install --upgrade pip
pip install --no-cache-dir <package-name>
```

### Out of memory?
- Close other apps
- Use Groq API instead of local models
- Install packages one at a time

### Import errors?
```bash
python -c "import langchain; import groq; print('OK')"
```

### Agent Zero won't start?
- Check API key is set in .env
- Verify model selection in main.py
- Check Python version: `python --version` (need 3.8+)

---

## Battery & Performance Tips

1. **Disable battery optimization** for Termux:
   - Settings → Battery → Battery Optimization → Termux → Don't Optimize

2. **Use external API models** (don't run local Ollama on phone)

3. **Keep screen on** during long operations

4. **Monitor battery** - AI operations are power-intensive

---

## Need Help?

- Full guide: See `TERMUX_SETUP.md`
- Agent Zero docs: https://github.com/frdel/agent-zero
- Termux wiki: https://wiki.termux.com/

---

**Enjoy Agent Zero on Android!** 🤖📱✨
