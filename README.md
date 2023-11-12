![A child reading in space](https://i.imgur.com/1Y4a6KG.png)

# AstroStory

Built for SwanHacks 2023 at Iowa State University.

## Motivation:

AstroStory is born from our fascination with space and storytelling. We aim to inspire people of all ages, especially kids, to explore the wonders of the cosmos through their imagination. Our motivation is to provide a unique experience by allowing users to select images, input text, and generate captivating stories related to space.

What sets AstroStory apart is the variety of tones it offers, from Dark Sci-Fi to Romantic Space Opera. We want to take users on journeys across different genres within the realm of space. Our goal is to bridge the gap between everyday life and the mysteries of the universe, fostering a love for space and storytelling.

AstroStory is more than just a story generation app; it's a creative portal where every element becomes a canvas for cosmic adventures.

## What AstroStory Does:

AstroStory is a creative storytelling app designed to engage users in imaginative journeys through space. Here's how it works:

- **Image Selection:** Users can choose random images, whether they are related to space or not, to kickstart their stories. These images serve as the initial inspiration for the narrative.

- **Text Input:** Users have the freedom to personalize and enhance their stories by inputting their own text and ideas. Whether it's naming characters, introducing plot twists, or crafting specific events, users can shape the story as they see fit.

- **Tone Selection:** AstroStory offers a range of storytelling tones, including Dark Sci-Fi, Cosmic Comedy, Epic Adventure, Romantic Space Opera, Cosmic Horror, Space Fantasy, and Time Travel Paradox. Users can choose the tone that matches their storytelling mood.

- **Story Generation:** Once all elements are in place, AstroStory's magic begins. It generates a unique and captivating story by blending the selected image, user input, and chosen tone. Each resulting narrative is a cosmic adventure that is both unexpected and fascinating.

AstroStory encourages creativity, sparks imagination, and invites users to explore the mysteries of the universe. It's a platform that empowers users to become storytellers of their own cosmic tales, all at their fingertips.

Certainly, here's a section in your readme that provides technical details about the AI components and the tech stack used in your AstroStory project:

## Demo

[![Watch the video](https://img.youtube.com/vi/DibcWddzASY/maxresdefault.jpg)](https://youtu.be/DibcWddzASY)

## Tech Stack

### Frontend:

- **Framework**: Next.js with TypeScript
  - Next.js is a React framework that provides server-rendered React applications and is known for its speed and developer-friendly features.
  - TypeScript adds static typing to JavaScript, enhancing code quality and developer productivity.

### Backend:

- **Runtime**: Node.js
  - Node.js is a JavaScript runtime that allows for server-side development, providing scalability and performance.
- **APIs**:
  - **OpenAI Vision API**: Used to input and analyze images, extracting key information.
  - **DALL·E**: A model by OpenAI that generates images from text descriptions, enhancing the visual aspect of the stories.
  - **OpenAI GPT-4**: Employs natural language processing to create coherent and engaging narratives based on user inputs.

### Dockerization:

- **Containerization**: The entire application has been containerized using Docker.
  - Docker containers encapsulate the application and its dependencies, ensuring consistency and portability across different environments.

By combining these technologies, we've created a powerful and flexible platform that seamlessly integrates AI capabilities. OpenAI Vision, DALL·E, and GPT-4 work in harmony to transform images and user inputs into captivating stories set in the vastness of space.

### Local Deployment:

1. **Clone Your Next.js Project**: If you haven't already, clone your Next.js project repository to your local machine using Git.

2. **Install Dependencies**: In the root directory of your project, open a terminal, and run the following command to install project dependencies:

   ```bash
   npm install
   ```

3. **Create a `.env.local` File**: In the root directory of your Next.js project, create a `.env.local` file to store sensitive environment variables like your OpenAI API key. Open the file in a text editor.

4. **Add Your OpenAI API Key**: Inside the `.env.local` file, add your OpenAI API key as follows:

   ```env
   OPENAI_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual OpenAI API key.

5. **Run the Development Server**: Start your Next.js development server by running the following command:

   ```bash
   npm run dev
   ```

   This will launch your Next.js app locally, and you can access it in your web browser at `http://localhost:3000` by default.

6. **Access Your Next.js App**: Open a web browser and navigate to `http://localhost:3000` to access your Next.js app running locally.

### Docker Deployment (Optional)

For containerized deployment using Docker, please refer to this : https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables

## Infrastructure and AI Interactions

### The Harmonious Symphony of AI Self-Prompts

AstroStory orchestrates a harmonious symphony of AI self-prompts, where each API plays a vital role in creating captivating stories related to space. Here's how they communicate and collaborate seamlessly:

### 1. OpenAI Vision API:

- OpenAI Vision serves as the visual storyteller, analyzing user-selected images and providing a rich description of their content.
- This description becomes a dynamic prompt for the subsequent AI engines, setting the stage for the story.

### 2. DALL·E:

- DALL·E, the creative visionary, takes the visual prompt from OpenAI Vision and generates stunning images based on the description.
- These newly generated images serve as visual inspiration, enhancing the narrative's visual aspect.

### 3. OpenAI GPT-4:

- OpenAI GPT-4, the master wordsmith, steps into the storytelling realm. It receives the visual prompt from DALL·E and the textual context from OpenAI Vision.
- Using this combined information, GPT-4 crafts a narrative that seamlessly weaves the visual and textual elements together.
- The generated narrative, in turn, serves as a new prompt for further iterations, creating a recursive and ever-evolving storytelling experience.

#### A Cosmic Feedback Loop

This dynamic feedback loop of prompts ensures that every story generated by AstroStory is unique, unexpected, and rich in creativity. It's akin to a cosmic conversation between the AI engines, with each iteration building upon the previous one.

AstroStory's AI interaction is not just a mechanical process; it's a creative journey through the cosmos, where the AI engines inspire and challenge each other, resulting in stories that transport users to the far reaches of the universe.

### Dockerization: Reliability and Scalability

AstroStory's infrastructure is fortified by Docker, a battle-tested containerization technology known for its reliability and scalability.

- **Reliability**: Docker ensures consistent and predictable behavior across different environments. What works during development and testing is guaranteed to work in production, enhancing the reliability of our application.

- **Scalability**: Scaling our cosmic storytelling experience is effortless with Docker. Whether we're serving a handful of users or reaching for the stars with millions, Docker enables seamless scaling, ensuring that AstroStory can accommodate any number of cosmic adventurers.

Docker is the cosmic vessel that makes AstroStory's AI-driven adventures not only reliable but also capable of expanding to infinity and beyond.

## Further Improvements

As we continue to enhance our AstroStory project, here are some advanced infrastructure improvements we plan to implement for our AWS deployment:

### 1. **Implement AWS Elastic Kubernetes Service (EKS):**

- **Why**: EKS offers managed Kubernetes clusters, providing scalability, reliability, and simplified management. It allows us to focus on our application rather than cluster administration.

### 2. **Utilize Amazon Elastic Container Registry (ECR):**

- **Why**: ECR seamlessly integrates with EKS, providing a secure and scalable solution for storing and deploying Docker container images. This ensures efficient image management and version control.

### 3. **Implement CI/CD Pipelines:**

- **Why**: Setting up continuous integration and continuous deployment (CI/CD) pipelines automates the deployment process, reducing human error and ensuring consistent deployments. It streamlines the development workflow and allows for rapid updates.

### 4. **Integrate Auto Scaling:**

- **Why**: Auto-scaling policies for both EKS worker nodes and Kubernetes Pods ensure that our application can dynamically handle changes in traffic and demand, optimizing resource utilization and user experience.

### 5. **Enhance Monitoring and Logging:**

- **Why**: Robust monitoring and logging solutions using AWS CloudWatch, Prometheus, Grafana, or similar tools help us proactively identify and address performance issues, security threats, and anomalies.

### 6. **Strengthen Security Posture:**

- **Why**: Implementing security best practices, such as IAM roles, VPC security groups, and network policies, ensures that our application and data remain secure. Regularly updating dependencies helps us address vulnerabilities.

### 7. **Implement Disaster Recovery Plans:**

- **Why**: Disaster recovery procedures and backups are crucial for data resilience and system availability. Having a well-defined plan in place ensures minimal downtime and data loss in case of unexpected events.

These improvements are essential for optimizing our AWS deployment, enhancing performance, security, and reliability, and ensuring a seamless experience for our users as they embark on cosmic storytelling adventures.
