# EC2 setup for a node.js server

## update and & upgrade
```bash
sudo apt update -y
sudo apt upgrade -y
```

```bash
## install nvm
```bash
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
## make nvm available
```bash
. ~/.nvm/nvm.sh
```

## install node
```bash
nvm install node
```

## check node and npm version
```bash
node -v
npm -v
```

## Install git
```bash
sudo apt update -y
sudo apt install git
```

## check git version
```bash
git --version
```

## clone the repository
```bash
git clone https://github.com/KonarzewskiP/ForecastFriend.git
```

## navigate to the repository
```bash
cd ForecastFriend
```

## install dependencies
```bash
npm install
```

## build the project
```bash
npm run build
```

## start the server
```bash
npm start
```


# Remember to never store permanent credentials on shared instances. Use temporary tokens or SSH keys with limited scope when possible.


```bash
# Generate SSH key on EC2
ssh-keygen -t ed25519 -C "your_email@example.com"
```


```bash
# Add the public key to your GitHub account
cat ~/.ssh/id_ed25519.pub
```
```
1. Go to Settings
2. Click SSH and GPG keys in the left sidebar
3. Click New SSH key or Add SSH key
4. Give your key a descriptive title (e.g., "EC2 Instance")
5. Paste your public key into the "Key" field
6. Click Add SSH key
```

```bash
# Then clone using SSH URL
git clone git@github.com:KonarzewskiP/ForecastFriend.git
```

```bash
# Remove the global credential configuration from you GitHub account
```
