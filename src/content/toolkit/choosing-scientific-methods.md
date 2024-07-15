---
title: Choosing Scientific Methods
publishDate: 2024-07-08 00:00:00
# img: /co-creation-toolkit/assets/illustrations/nldp-farmer.svg
img: /co-creation-toolkit/assets/toolkit/covers/toolkit-cover-17.svg
img_alt: Cover description
description: Common scientific methods used in the decision support tools and how to choose the most appropriate one for your project.
tags:
 - Scientific Methods
 - Decision Support Tools
 - Data Analysis
category: Design and Prototyping
featured: false
---

### Overview

#### Who is this guidance for?

This page provides **developers**, **designers**, and **product owners** with an overview of scientific methods commonly used in decision support tools, along with guidance on selecting the most appropriate method for their specific use case.


> #### Summary
> 
> - **Problem and Decision Type Matter**: Start by clearly outlining the problem your decision support tool (DST) will address and the type of decision it will support (operational, tactical, strategic).
> - **Tailor to Your Data**: analyse the data available (structured vs. unstructured, complexity, etc.) as this influences suitable scientific methods.
> - **Output and User Interaction**: Determine what output the DST should provide (e.g., recommendations, visualisations) and how much user control is needed.
> - **Match Method to Requirements**: Common decision support methods include rule-based systems, statistical methods, machine learning, simulation, and optimisation. Select the one that aligns best with your problem, data, and output needs.
> - **Technical Factors and User Expertise**: Consider your technical resources and assess the technical sophistication of potential users to ensure the DST's complexity is appropriate.

### How to Choose?

#### 1. Define the Problem and Decision Type

* **Problem Clarity**: Clearly outline the problem the DST is intended to address. Is it complex, straightforward, highly structured, or unstructured?
* **Decision Type**: Identify the nature of the decision:
    * Operational: Routine, day-to-day decisions.
    * Tactical: Mid-level decisions focusing on resource allocation and planning.
    * Strategic: High-level, long-term decisions impacting the organization's direction.

#### 2. Consider the Data Landscape

* **Data Availability**: Evaluate the type and quality of data you have access to (structured vs. unstructured, internal vs. external).
* **Data Complexity**: Assess the volume and intricacy of the data. Will it involve simple calculations or complex analysis?

#### 3. Determine the Desired Output and Level of User Interaction

* **Output Needs**: What type of output does the DST need to provide (recommendations, reports, visualisations, etc.)?
* **User Interaction**: How much control and interactivity do users require? Should it be a simple recommendation engine or a system that allows for exploration and what-if scenarios?

#### 4. Match Methods to Your Requirements

Here are common decision support techniques and when they are most suitable:

* **Rule-Based Systems**: Ideal for structured problems with clear if-then logic.
* **Statistical Methods**: Effective for analyzing historical data, identifying trends, and forecasting (e.g., regression analysis).
* **Machine Learning**: Suited for complex problems where patterns aren't easily defined by rules. Can adapt as new data becomes available (e.g., classification, clustering, deep learning).
* **Simulation**: Useful for testing "what-if" scenarios and understanding the impact of potential decisions in a risk-free environment.
* **Optimisation**: Helps find the best solution when there are multiple constraints and objectives.
* **Physics-based or Environmental Models**: Leverage the laws of physics and domain-specific knowledge to simulate real-world systems and their behaviours. These models are valuable for complex environmental decision-making where cause-and-effect relationships are well understood and need to be explicitly represented (e.g., assessing the impact of infrastructure projects on ecosystems).

#### 5. Consider Your Assumptions and User Expertise

* **Transparency of Assumptions and Uncertainty**: Explicitly communicate the assumptions underlying models or analysis. Provide users with a clear understanding of potential uncertainties and their impacts on the decision-making process.
* **User Sophistication**: Assess the technical expertise of potential users. The DST's complexity should match their skills.

#### Important Considerations

* **Explainability**: Some methods (like rule-based systems) are transparent, while others (like deep neural networks) can be more of a "black box." Consider the need for explainability in your decision-making process.
* **Bias**: Watch out for potential bias in your data, as this might carry over into your DST's outputs.
* **Technical Resources**: Do you have in-house expertise or need external development or science support? Are there computational limitations?s
* **Validation**: Rigorously test and validate your DST using real-world data to ensure it yields accurate and helpful results.

#### Example 

A product owner wants to develop a DST to support mineral exploration decisions.

* **Problem**: Prioritise areas for further exploration based on the likelihood of finding valuable mineral deposits.
* **Data**: Historical geological surveys, geochemical data, geophysical measurements, remote sensing data, etc.
* **Output**: Risk/potential score indicating the probability of a commercially viable mineral deposit within the area.
* **Method**: A machine learning model (e.g., random forest or neural network) might be appropriate as it can analyse complex relationships between geological variables and known mineral deposit locations.

Remember: The best method for your decision support tool is **the one that most effectively addresses the specific nature of your decision problem, available data, and desired outputs**.

### Links

* [Find more details in the Guidance for Decision Support Tools guidance document](https://drive.google.com/file/d/1HyczxRNE2pCbw3n1ayYcHkmghjvrATqc/view?usp=sharing)
