export interface Contribution {
  project: string;
  description: string;
  type: "pr" | "issue";
  url: string;
  status: "merged" | "open" | "closed";
}

export const CONTRIBUTIONS: Contribution[] = [
  {
    project: "open-webui/open-webui",
    description: "Contribution to Open WebUI — a self-hosted AI interface",
    type: "pr",
    url: "https://github.com/open-webui/open-webui/pull/5613",
    status: "merged",
  },
  {
    project: "jhipster/generator-jhipster",
    description: "Pull request contribution to the JHipster application generator",
    type: "pr",
    url: "https://github.com/jhipster/generator-jhipster/pull/20802",
    status: "merged",
  },
  {
    project: "jhipster/generator-jhipster",
    description: "Issue report for JHipster generator improvements",
    type: "issue",
    url: "https://github.com/jhipster/generator-jhipster/issues/25608",
    status: "open",
  },
  {
    project: "linuxmint/cinnamon-spices-applets",
    description: "Contributions to Linux Mint Cinnamon desktop applets",
    type: "pr",
    url: "https://github.com/linuxmint/cinnamon-spices-applets/pulls?q=is%3Apr+author%3Acevheri+is%3Aclosed",
    status: "merged",
  },
  {
    project: "daodao97/chatmcp",
    description: "Contributions to ChatMCP — a chat client for MCP protocol",
    type: "pr",
    url: "https://github.com/daodao97/chatmcp/pulls?q=is%3Apr+is%3Aclosed+author%3Acevheri",
    status: "merged",
  },
  {
    project: "langchain-ai/new-langgraph-project",
    description: "New project contribution to the LangGraph ecosystem",
    type: "pr",
    url: "https://github.com/langchain-ai/new-langgraph-project/pull/17",
    status: "merged",
  },
  {
    project: "OpenAPITools/openapi-generator",
    description: "Contribution to OpenAPI Generator — code generation from OpenAPI specs",
    type: "pr",
    url: "https://github.com/OpenAPITools/openapi-generator/pull/13536",
    status: "merged",
  },
];
