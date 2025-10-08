---
layout: layout/projects.njk
title: Verification of AI-enabled Cyber-Physical Systems
description: Verification framework to ensure the safety of camera-based autonomous vehicles
date: 2025-02-04
tags:
  - projects
  - csp
  - verification
excerpt: "Our group develops scalable formal methods to verify AI-enabled cyber-physical systems, focusing on control and perception modules that integrate neural networks and learning-based components."
image: ""
imageAlt: ""
---

<br/>

Our group works on formal verification of AI-enabled cyber-physical systems (CPS), focusing on ensuring the reliability and safety of systems that integrate learning-enabled components in both control and perception modules.

For the control modules, we are developing scalable formal methods for the verification of neural networks including size reduction techniques through bisimulated network construction, abstraction–refinement frameworks, and contract-based design methodologies that enable compositional reasoning across complex CPS architectures. To address the evolving nature of neural networks, we also develop conformance checking techniques. These methods help in establishing formal relationships between successive versions of a network and enable online proof transfers, allowing us to verify systems that evolve through retraining without restarting the verification process from scratch.
We further study the verification of systems with anytime-based perception, where the anytime paradigm allows flexibility in latency and accuracy, unlike traditional sensors that return outputs with fixed performance. This adaptability enables autonomous systems to perform more complex tasks while ensuring efficient use of computational resources. However, these enhanced capabilities also make the verification process more challenging. We are developing scalable verification techniques to ensure the safety of such systems using reachable set computation methods.
