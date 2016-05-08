# setup script for mac with atom

# install home brew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew update

# install node
brew install node
curl http://npmjs.org/install.sh | sh

# install typescript and linter
npm install -g typescript
npm install -g tslint
