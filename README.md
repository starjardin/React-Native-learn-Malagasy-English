# Learn English and Malagasy

# About

I built this application along with three other developers. We wanted to explore React Native while creating something useful. In this app, you can learn both English and Malagasy, useful for both foreigners who want to learn Malagasy and Malagasy people who are keen on learning English.

# install

```bash
yarn install
```



# run

Update stories availabe for storybook and run react-native start

```bash
yarn start
```

in separate terminal

```bash
yarn android
```

or 

```bash
yarn ios
```

# use storybook

Enter dev menu on phone crtl + m (for android) select toggle storybook


# problems

if you get 

```bash
Error: spawn ./gradlew EACCES
 ```

while running `yarn android`

try

```
chmod 755 android/gradlew 
```
