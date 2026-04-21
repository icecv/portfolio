export interface ProjectChallenge {
  problem: string
  solution: string
}

export interface ProjectDetail {
  background: string
  problemBreakdown: string[]
  solution: string
  architecture: string
  techStack: string[]
  promptDesign?: string
  workflow?: string[]
  challenges: ProjectChallenge[]
  results: string[]
  reflection: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  featured: boolean
  date: string
  status: 'completed' | 'in-progress' | 'archived'
  githubUrl?: string
  demoUrl?: string
  gradient: string
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'multi-agent-research-assistant',
    title: '多智能体研究助理',
    subtitle: '基于编排器 + 专家智能体模式的自主研究管道',
    description:
      '一套多智能体系统，可自主搜索、阅读并整合研究论文与网页内容，生成结构化报告——研究效率提升 10 倍。',
    tags: ['LangChain', 'Claude', 'Tavily API', 'Next.js', 'Python', '多智能体'],
    featured: true,
    date: '2024-03',
    status: 'completed',
    githubUrl: 'https://github.com/chenxiaoming/research-assistant',
    demoUrl: 'https://research-assistant.vercel.app',
    gradient: 'from-blue-500 to-indigo-600',
    detail: {
      background:
        '我合作的一个研究团队，每周要花 3-4 小时在资料收集和初步阅读上，才能开始真正的分析工作。瓶颈不在于思考——而在于信息检索和初步整合。我想构建一个工具，把这 4 小时的机械性工作压缩到 10 分钟。',
      problemBreakdown: [
        '如何在学术论文、博客和新闻中可靠地找到相关来源，同时避免幻觉引用？',
        '论文动辄 30 页以上，如何在上下文窗口限制内处理长文档？',
        '多个智能体并行运作，如何避免重复工作和任务冲突？',
        '如何以研究人员真正信赖且可追溯的形式呈现合成结果？',
      ],
      solution:
        '设计了"编排器 + 专家"模式：编排器接收研究问题，将其拆解为子查询，并行派发给专家智能体（SearchAgent、ReaderAgent、SynthesizerAgent）。每个智能体职责单一、边界清晰。编排器汇总结果，生成带文献引用的结构化报告。',
      architecture:
        '系统采用有向无环图（DAG）建模智能体依赖关系。编排器首先并行运行多个 SearchAgent（每个子查询一个），其输出流入 ReaderAgent（分块并摘要文档），最终汇入 SynthesizerAgent 生成最终报告。MemoryStore 追踪已获取内容，避免重复 API 调用。',
      techStack: [
        'LangChain（智能体编排）',
        'Anthropic Claude 3 Opus（推理）',
        'Tavily API（网页搜索）',
        'Pinecone（文档向量存储）',
        'FastAPI（后端）',
        'Next.js + Tailwind（前端）',
        'Vercel（部署）',
      ],
      promptDesign:
        '编排器提示词采用思维链（CoT）结构：先让模型推理查询拆解方式，再输出包含子智能体及其输入的 JSON 计划。实践发现，明确要求模型"先思考你不知道什么"再规划，显著提升了拆解质量。每个专家智能体使用简短、任务专一的系统提示（< 300 Token），以减少行为漂移。',
      workflow: [
        '用户通过界面提交研究问题',
        '编排器将问题拆解为 3-5 个子查询并生成计划',
        '多个 SearchAgent 并行检索，每个子查询返回 Top 5 结果',
        'ReaderAgent 抓取、分块并摘要每个来源',
        'SynthesizerAgent 将摘要合并为结构化报告',
        '报告以流式方式输出到前端，附带行内引用标注',
      ],
      challenges: [
        {
          problem: '当子查询存在语义重叠时，多个智能体会重复搜索相同内容，浪费 API 预算。',
          solution:
            '在编排器中增加语义去重步骤：派发前对所有子查询做向量化并聚类，重叠查询合并处理。API 调用量减少约 35%。',
        },
        {
          problem: 'SynthesizerAgent 有时会"脑补"听起来合理但实为幻觉的细节。',
          solution:
            '修改合成提示词，要求每个论点必须附带方括号引用 [来源 N]。增加后处理验证器，检查每条论点是否映射到实际获取的来源。幻觉率从约 12% 降至约 2%。',
        },
        {
          problem: '长篇论文超出上下文窗口限制。',
          solution:
            '实现分层分块 + Map-Reduce 策略：将文档切分为 512-Token 片段，先对每个片段摘要，再对摘要做二次摘要，保留关键信息的同时控制在上下文限制内。',
        },
      ],
      results: [
        '平均研究任务耗时：4 小时 → 12 分钟（缩短 95%）',
        '来源引用准确率：98%+（经人工审核验证）',
        '已被 3 个研究团队内部使用，活跃用户 20+',
        '每份报告 API 成本：约 ¥1.1',
      ],
      reflection:
        '最大的认知是：智能体的可靠性不取决于大模型本身，而取决于系统设计。智能体之间清晰的契约、显式的输出 Schema、以及验证步骤，远比模型选型更重要。我也深刻意识到，Prompt 工程本质上就是软件工程：迭代提示词，就是迭代系统逻辑。',
    },
  },
  {
    id: '2',
    slug: 'ai-resume-screener',
    title: 'AI 简历筛选智能体',
    subtitle: '基于 LLM 的简历评估管道，按岗位要求自动评分排序',
    description:
      '端到端的智能体管道，自动解析简历、依据结构化评分标准评估候选人与 JD 的匹配度，并生成排名短名单——筛选耗时减少 80%。',
    tags: ['OpenAI', 'LangChain', 'FastAPI', 'Pinecone', 'Python', 'RAG'],
    featured: true,
    date: '2024-01',
    status: 'completed',
    githubUrl: 'https://github.com/chenxiaoming/resume-screener',
    gradient: 'from-violet-500 to-purple-600',
    detail: {
      background:
        '我认识的一位招聘负责人，每个岗位要处理 200+ 份简历，光是初筛就要花 2 小时以上。大部分时间都在做机械性判断：这个人有没有必备技能？经验够不够？我想把机械判断自动化，同时把真正需要判断力的部分留给人来做。',
      problemBreakdown: [
        '简历格式千差万别（PDF、DOCX、双栏排版）——可靠解析本身就是一个难题。',
        '"5 年 React 经验"和"主导 React 项目团队"并不等价，如何区分深度与广度？',
        '系统必须避免在评估逻辑中引入年龄、性别、姓名等歧视性信号。',
        '招聘官依赖直觉——如何让 AI 推荐结果可信、可追溯？',
      ],
      solution:
        '构建了三阶段管道：（1）解析与规范化——将各格式简历提取为统一 JSON 结构；（2）评估——依据从 JD 提取的加权评分标准为候选人打分；（3）排名与解释——生成带逐项说明的候选人排名列表。每条评分都有自然语言解释，方便人工抽查推理过程。',
      architecture:
        '简历文件上传至 S3 后，由解析服务处理（PDF 使用 LlamaParse，DOCX 使用自定义提取器）。解析数据结构化为统一 JSON Schema。评估器先用 GPT-4 从 JD 中提取加权评估标准，再对每份简历的每个标准打分。评分与推理过程存入 Postgres。Next.js 后台仪表盘展示候选人排名及下钻解释。',
      techStack: [
        'OpenAI GPT-4o（评估与提取）',
        'LlamaParse（PDF 解析）',
        'FastAPI（后端）',
        'PostgreSQL + Supabase（数据存储）',
        'AWS S3（文件存储）',
        'Next.js（管理后台）',
        'Tailwind CSS（UI）',
      ],
      promptDesign:
        'JD 分析提示词提取：必要技能、加分技能、工作年限、职级信号和领域背景——全部输出为结构化 JSON。评估提示词接收一份简历加提取好的评估标准，输出每个标准的评分（0-10）和 1-2 句理由。全程使用 Function Calling / 结构化输出，确保 JSON 100% 可解析。核心洞察：给模型明确的评分维度，比让它"综合评估这个候选人"结果一致得多。',
      challenges: [
        {
          problem:
            'PDF 解析质量不稳定——表格和双栏排版经常乱序，导致技能和经验信息错位。',
          solution:
            '从原始 PyPDF 切换至 LlamaParse，对复杂排版的处理更鲁棒。边缘情况追加 Vision API 兜底，从图像中提取文字。解析准确率从约 75% 提升至约 96%。',
        },
        {
          problem:
            '模型会因为简历未明确提及 JD 要求的技能而扣分，即使候选人的工作经历已明显涵盖该能力。',
          solution:
            '在评估前增加"隐性技能推断"步骤：用一个提示词读取简历，根据工作经历推导出隐含技能列表，将扩展后的上下文一并传入评估提示词。假阴性率降低约 40%。',
        },
      ],
      results: [
        '每个岗位筛选耗时：2 小时 → 20 分钟（减少 80%）',
        '用户测试中招聘官满意度评分：4.7 / 5',
        '优质候选人漏筛率（假阴性）：< 5%',
        '试点阶段处理 8 个岗位、1500+ 份简历',
      ],
      reflection:
        '最难的不是 AI，而是信任。招聘官需要理解候选人为什么被评为这个分数。在可解释性上的投入（逐维度推理，而不只是总分），是推动落地的最关键因素。先建立信任，再谈准确率。',
    },
  },
  {
    id: '3',
    slug: 'rag-customer-support',
    title: 'RAG 智能客服机器人',
    subtitle: '以文档为基础、有接地气引用的检索增强客服智能体',
    description:
      '生产级 RAG 系统，通过混合检索、接地验证和不确定时自动升级人工等机制，以 97% 准确率自主处理 60% 的客服工单。',
    tags: ['RAG', 'OpenAI', 'Pinecone', 'Vercel AI SDK', 'Next.js', 'TypeScript'],
    featured: true,
    date: '2023-10',
    status: 'completed',
    demoUrl: 'https://support-demo.vercel.app',
    gradient: 'from-cyan-500 to-blue-600',
    detail: {
      background:
        '某 B2B SaaS 公司的客服团队每周处理 500+ 工单，其中 60% 是文档里已有答案的重复问题。客服人员疲于应付机械性问题，无暇处理真正需要专业判断的复杂案例。他们需要一个准确的机器人——而不是一个会自信给出错误答案、损害用户信任的机器人。',
      problemBreakdown: [
        '文档分散在 200+ 页面，且频繁更新——如何保持知识库的时效性？',
        '用户用自然语言提问，措辞与文档标题往往不匹配——检索必须基于语义。',
        'AI 客服最大的用户投诉：自信地给出错误答案。如何优雅地处理不确定性？',
        '部分问题需要账号相关上下文（账单、用量）——纯文档检索不够用。',
      ],
      solution:
        '构建了 RAG 管道，三个核心设计决策：（1）混合检索（语义 + 关键词），提升召回率；（2）"接地验证"步骤，校验答案是否真正来自检索到的上下文；（3）显式不确定性处理——当置信度低于阈值时，机器人明确告知并携带完整上下文转人工。',
      architecture:
        '文档通过 Webhook 在每次内容更新时触发摄入（Notion → 分块 → 向量化 → Pinecone）。查询时：用户问题向量化 → 混合检索（BM25 + 余弦相似度）→ 取 Top 8 片段 → 交叉编码器重排序 → 生成带引用的答案 → 接地验证器校验答案与来源的对应关系 → 流式输出到 UI。整个链路耗时 < 2 秒。',
      techStack: [
        'OpenAI text-embedding-3-large（向量化）',
        'GPT-4o（生成）',
        'Pinecone（向量数据库）',
        'BM25（关键词检索）',
        'Vercel AI SDK（流式输出）',
        'Next.js App Router（前端）',
        'Notion API（文档来源）',
        'Supabase（对话日志）',
      ],
      promptDesign:
        '系统提示词分三部分：（1）角色与语气规范；（2）接地规则——"只能基于以下 <context> 内容作答。若上下文信息不足，请明确说明，不要推测或使用上下文之外的知识"；（3）输出格式——答案须包含行内引用 [来源 N]。接地验证器是独立的轻量提示词，接收答案与来源，输出 JSON 格式的置信度评分。置信度 < 0.7 的答案标记为人工审核。',
      workflow: [
        '用户在聊天组件中发送消息',
        '消息分类：常见问题 / 账号相关 / 超出范围',
        '常见问题：混合检索获取 Top 片段，交叉编码器重排序',
        'GPT-4o 仅基于上下文生成带引用的答案',
        '接地验证器计算置信度',
        '高置信度：直接流式输出答案给用户',
        '低置信度：展示部分答案 + "转人工客服"按钮',
      ],
      challenges: [
        {
          problem:
            '用户用自己的表达方式提问（如"关掉邮件通知"），与文档中的官方术语（如"通知偏好设置"）不匹配，导致检索失败。',
          solution:
            '增加查询扩展步骤：检索前，为用户问题生成 3 个同义改写，对所有版本同时检索，再去重合并结果。同义词场景的检索召回率显著提升。',
        },
        {
          problem: '文档更新后，旧版本片段在向量库中仍会被检索到，时效性失效可能持续数日。',
          solution:
            '构建 Webhook 监听器，在 Notion 更新后 5 分钟内触发文档重新摄入。引入文档版本控制——片段打上摄入时间戳标签，向量库查询时通过过滤器排除已有新版本的旧片段。',
        },
      ],
      results: [
        '60% 的工单由机器人自主处理，无需人工介入',
        '机器人处理工单的客户满意度（CSAT）：4.4 / 5（人工为 4.6 / 5）',
        '客服团队每周节省约 18 小时工作量',
        '答案准确率（有文档依据）：97%',
        '平均响应时间：1.8 秒',
      ],
      reflection:
        '接地验证器是让产品值得信赖的关键功能。没有它，模型偶尔会生成听起来合理但实为错误的答案。有了它，我们可以自信地展示机器人的答案，因为我们知道它有据可查。这个教训对所有生产级 AI 产品都适用：知道什么时候不该回答，和知道如何回答同等重要。',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
