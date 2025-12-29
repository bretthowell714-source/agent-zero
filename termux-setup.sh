#!/data/data/com.termux/files/usr/bin/bash
# Agent Zero Setup Script for Termux
# Run this script in Termux to automatically set up Agent Zero

set -e

echo "=================================="
echo "Agent Zero - Termux Setup Script"
echo "=================================="
echo ""

# Check if running in Termux
if [ -z "$PREFIX" ] || [ ! -d "/data/data/com.termux" ]; then
    echo "WARNING: This script is designed for Termux on Android"
    echo "Current environment may not be Termux"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "Step 1: Updating Termux packages..."
pkg update -y && pkg upgrade -y

echo ""
echo "Step 2: Installing required packages..."
pkg install -y python python-pip git build-essential binutils clang cmake openssl libffi libjpeg-turbo

echo ""
echo "Step 3: Setting up storage access..."
echo "Please grant storage permissions when prompted"
termux-setup-storage || echo "Storage setup skipped or already configured"

echo ""
echo "Step 4: Upgrading pip..."
pip install --upgrade pip setuptools wheel

echo ""
echo "Step 5: Installing Python dependencies..."
echo "This may take several minutes and consume significant storage and battery..."
echo ""

# Try to install requirements
if pip install --no-cache-dir -r requirements.txt; then
    echo "All dependencies installed successfully!"
else
    echo ""
    echo "Some packages failed to install."
    echo "Attempting to install critical packages individually..."

    # Install critical packages one by one
    CRITICAL_PACKAGES=(
        "python-dotenv"
        "anthropic"
        "openai"
        "groq"
        "langchain"
        "langchain-core"
        "langchain-anthropic"
        "langchain-openai"
        "langchain-groq"
        "ansio"
    )

    for package in "${CRITICAL_PACKAGES[@]}"; do
        echo "Installing $package..."
        pip install --no-cache-dir "$package" || echo "Failed to install $package (non-critical)"
    done
fi

echo ""
echo "Step 6: Creating .env file..."
if [ ! -f .env ]; then
    cp example.env .env
    echo ".env file created from example.env"
else
    echo ".env file already exists, skipping..."
fi

echo ""
echo "=================================="
echo "Setup Complete!"
echo "=================================="
echo ""
echo "Next steps:"
echo "1. Edit .env file and add your API keys:"
echo "   nano .env"
echo ""
echo "2. (Optional) Edit main.py to select your preferred model:"
echo "   nano main.py"
echo "   Recommended for Termux: models.get_groq_llama70b()"
echo ""
echo "3. Run Agent Zero:"
echo "   python main.py"
echo ""
echo "For detailed instructions, see TERMUX_SETUP.md"
echo ""
echo "Recommended: Get a free Groq API key at https://console.groq.com/"
echo ""
