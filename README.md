
# Study Buddy AI 

Study Buddy is an AI-powered education app that provides step-by-step answers to academic questions across various subjects. Whether you need help with Math, Science, Languages, Literature, History, or more, Study Buddy has got you covered!

## Features

- Ask Academic Questions: Input your subject and question, and Study Buddy will use advanced AI algorithms to provide detailed and comprehensive answers.

- Subject Selection: Choose from a list of subjects, making it easier for Study Buddy to tailor its responses to your specific area of study.

## Getting Started

To run the Study Buddy app locally, follow these steps:

1. Clone this repository to your local machine.

2. Install the required dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

3. Obtain OpenAI API Key:

   - Sign up for an account on OpenAI's website (https://openai.com) and obtain your API key.
   - Create a `.env` file in the root directory of the project.
   - Add your OpenAI API key to the `.env` file like this:

   ```
   OPENAI_API_KEY=YOUR_API_KEY_HERE
   ```

   Note: Make sure to keep your API key secure and do not share it publicly.

4. Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

5. Visit `http://localhost:3000` in your web browser to access the Study Buddy app.

## Environment Variables

The Study Buddy app uses the following environment variable:

- `OPENAI_API_KEY`: Your OpenAI API key for accessing the AI-powered capabilities of the app. Make sure to keep it secure and don't share it publicly.

## Styling and Customization

Feel free to customize the app's appearance and styling to match your preferences. You can modify the `global.css` file in the `styles` directory to change colors, fonts, and more.

## Contributing

Contributions to the Study Buddy app are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can copy and paste the above description into your README.md file and make any necessary adjustments or additions based on your specific implementation and project details. Make sure to include information on how to use the app, how to set up the environment with the OpenAI API key, and any other relevant instructions for users and developers.