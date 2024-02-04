---
title: "Project Mithril: The Quest for Collaborative Excellence"
---
The following documents will explain the features and the uses of Obsidian for the developer documentation workflow. 

## Introduction

### Identifying the Problem

Our current approach to documenting development and business features is insufficient. For example, when building a form, crucial details such as validation rules, field character limits, success and failure messages, payload agreements, and return page specifications must be finalized beforehand. This ensures that no time is wasted revisiting these elements during development.

### The Proposed Solution

To foster better documentation practices among our developers, we have explored several tools that offer rich features and accessible ecosystems. We have chosen to experiment with Obsidian, an offline markdown editor that enhances the standard markdown functionality. This allows for easier navigation and the creation of elegant, user-friendly notes. Obsidian is supported by a robust open-source community, which continually enhances note-taking and synchronization features.

In our proposed framework, we utilize an open-source repository, [Quartz](https://quartz.jzhao.xyz/), to convert Obsidian pages into HTML. These can then be deployed on a static page server. For our demonstration, we employed GitHub Pages along with GitHub Actions to automate the build and deployment process upon each PR merge.

### Advantages of Our Method

- **Enhanced Markdown Experience**: Developers can enjoy a rich markdown editing experience with minimal setup—simply download the Obsidian desktop client.
- **Community Support**: Access to a vast array of open-source community plugins can streamline documentation workflows, leading to a more seamless experience.
- **GitHub Integration**: Documentation can be reviewed and approved through GitHub, encouraging full team participation and making it an essential part of our development process.
- **User-Friendly Documentation**: Our method offers a single-page documentation experience similar to platforms like Confluence, complete with shareable links for easy access.
- **Independence and Transparency**: By hosting and managing our documentation internally, we maintain full control over the process and benefit from the historical tracking provided by Git.

### Disadvantages from the method
* **Configuration Limitations**: Our existing repository structure may impose certain restrictions on configuration options.

## Some obsidian feature

### **Creating and Linking Notes**

One of the most powerful feature is [[page link feature]]. This looks fairly simple on paper but it coupled with the graph view and the backlink access can provide a really powerful experience for the consumer.

### Structured Data with Tables

Utilize tables to systematically organize data, such as API endpoints or project configurations, ensuring information is readily accessible and clearly presented.

markdownCopy code

| Endpoint        | Method | Description              |
|-----------------|--------|--------------------------|
| /api/forge      | POST   | Creates a new artifact   |
| /api/forge/:id  | GET    | Retrieves an artifact    |
### Embedding Code Snippets

Incorporate code snippets directly into your documentation, providing real-world examples and usage scenarios that enhance understanding and implementation.

javascriptCopy code

```JS
// Function to summon an HTTP request
const summonRequest = async (url) => {
  const response = await fetch(url);
  return response.json();
}
```

#### Leveraging Backlinks

Backlinks help in identifying the interconnections between documentation sections, offering insights into related components and their interactions.

### Advanced Documentation Features

- **Graph View**: Offers a holistic view of the documentation structure, aiding in the identification of under-documented areas.
- **Custom CSS**: Enhances the visual appeal and navigability of the documentation, making it more engaging and user-friendly.

### Conclusion

Our documentation, akin to a well-coordinated team, becomes more robust and effective through interconnectedness and comprehensive coverage. By adopting Obsidian and integrating these practices, we aim to build a dynamic and evolving knowledge base that supports our development efforts with precision and clarity.