const words = [
    'JavaScript programming', 'HTML and CSS basics', 'Frontend development', 'Web design principles',
    'Dynamic content handling', 'Responsive design', 'User interface', 'User experience', 'Version control',
    'Git and GitHub', 'Web performance', 'SEO fundamentals', 'JavaScript frameworks', 'React.js basics',
    'Vue.js overview', 'Angular essentials', 'Node.js introduction', 'Express.js guide', 'RESTful APIs',
    'Asynchronous JavaScript', 'Promises and async/await', 'JavaScript closures', 'Event handling',
    'DOM manipulation', 'CSS Grid', 'CSS Flexbox', 'CSS animations', 'Bootstrap framework', 'Materialize CSS',
    'Tailwind CSS', 'Sass basics', 'Less CSS preprocessor', 'BEM methodology', 'Web accessibility', 'ARIA landmarks',
    'JavaScript ES6', 'Transpiling with Babel', 'Webpack module bundler', 'Parcel bundler', 'Gulp task runner',
    'NPM package manager', 'Yarn package manager', 'JavaScript testing', 'Jest framework', 'Mocha and Chai',
    'Cypress end-to-end testing', 'React testing library', 'Storybook for React', 'TypeScript basics',
    'JavaScript debugging', 'Browser developer tools', 'Cross-browser compatibility', 'Web security basics',
    'HTTPS protocol', 'Content Security Policy', 'CORS handling', 'WebSockets', 'Server-Sent Events',
    'Service Workers', 'Progressive Web Apps', 'WebAssembly', 'GraphQL basics', 'Apollo Client', 'Relay for GraphQL',
    'React Native', 'Mobile web optimization', 'PWAs vs native apps', 'Microservices architecture',
    'Single Page Applications', 'Server-side rendering', 'Next.js framework', 'Gatsby.js', 'Nuxt.js for Vue',
    'Headless CMS', 'Strapi', 'Contentful', 'Sanity.io', 'Jamstack architecture', 'Netlify', 'Vercel',
    'AWS Amplify', 'Firebase', 'Google Analytics', 'Segment for analytics', 'Hotjar for user behavior',
    'A/B testing', 'Feature flagging', 'LaunchDarkly', 'Optimizely', 'FullStory', 'Intercom for user engagement',
    'Chatbots and AI', 'Voice search optimization', 'Natural Language Processing', 'Machine Learning in JS',
    'TensorFlow.js', 'D3.js for data visualization', 'Three.js for 3D graphics', 'WebGL basics'
];

const searchInput = document.querySelector('.search-bar input');
const itemList = document.getElementById('item-list');

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    itemList.innerHTML = '';

    words.forEach(word => {
        if (word.toLowerCase().includes(query)) {
            const highlightedWord = highlightText(word, query);
            const li = document.createElement('li');
            li.innerHTML = highlightedWord;
            itemList.appendChild(li);
        }
    });
});
