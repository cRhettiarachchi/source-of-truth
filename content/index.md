---
title: Documentation update proposal
---
The following documents will explain the features and the uses of Obsidian for the developer documentation workflow. 

## Introduction

### Identifying the Problem

Our current documentation strategy for both development and business operations falls short of our needs. Consider the process of creating a form: it's critical to define validation rules, field character limits, success and failure messages, payload agreements, and return page specifications at the outset. This pre-planning prevents the need for costly revisions during the development phase.

#### Main Issues with Our Current Workflow

- **Backend for Frontend (BFF) Documentation**: Almost nonexistent, creating gaps in understanding and implementation.
- **Frontend Documentation**: Exists partially but often misaligns with backend payloads, leading to inconsistencies.
- **Feature Documentation**: Lacks depth and official status, making it challenging to track changes or reference implementation details over time.
- **Documentation Maintenance**: We need a systematic approach to update and archive documentation, ensuring relevance and accessibility.
- **Motivation**: There's a lack of enthusiasm for allocating time to documentation efforts, impacting quality and completeness.

### The Proposed Solution

To enhance our documentation practices, we've investigated several tools, selecting Obsidian for its rich markdown features and user-friendly interface. Obsidian, supported by an active open-source community, facilitates efficient note-taking and document management.

#### Enhancements and Ideas

- **User Journey Documentation**: Establish a directory specifically for each user journey or complete workflow. This may include a single page detailing the entire flow and how each component operates within it.
- **Create and maintain a template for implementation details** - Develop a standardized template for documenting crucial feature aspects such as payload requirements, user role definitions, and validation processes. This template will ensure consistency across all documentation.
- **Maintain an archive directory** - Designate a "#hashtag" for outdated documents and move them to an archive directory. This will preserve historical data for future reference.
- **Use the documentation for alignments** - Encourage stakeholders involved in a feature to review its documentation. This ensures consensus on implementation details before development begins.

#### Implementation strategy

1. **Obsidian for Documentation**: Utilize Obsidian's advanced markdown features for creating comprehensive, easily navigable documents covering user journeys, feature overviews, and implementation details.
    
2. **Quartz Integration**: Leverage the Quartz framework to convert Obsidian notes to HTML, allowing for easy deployment on static servers. This approach ensures that our documentation is both accessible and visually appealing.
    
3. **Automation with GitHub**: Utilize static website hosting, and GitHub Actions for automatic deployment. This setup streamlines the process, ensuring documentation is updated with every PR merge.

 If you want to learn more about obsidian features I have a small document [[obsidian features|here]]