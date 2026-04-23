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
  coverImage: string
  detail: ProjectDetail
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-interview-coach',
    title: 'AI 面试教练系统',
    subtitle: '4 位 AI 面试官轮番上阵的多智能体模拟面试平台',
    description:
      '基于多智能体架构的模拟面试系统，由 HR、技术、行业专家、挑剔评审四个 AI 角色轮流提问，结合简历-JD 匹配分析与向量题库，生成专业评估报告。',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'DeepSeek API', '多智能体', 'RAG'],
    featured: true,
    date: '2024-11',
    status: 'completed',
    githubUrl: 'https://github.com/icecv/Interview-Coach',
    gradient: 'from-blue-500 to-indigo-600',
    coverImage: '/projects/interview-coach.png',
    detail: {
      background:
        '求职准备阶段，真实面试机会有限，传统刷题平台无法模拟多角色对话的真实面试压力。大多数候选人只能靠背答案，而非真正练习在不同类型面试官面前的临场表现。我想构建一个系统，让人可以在"低风险"环境里体验"高压力"的真实面试场景。',
      problemBreakdown: [
        '不同面试官关注点截然不同（HR 问动机、技术面问实现、行业专家问视野）——如何让每个 AI 角色真正"像"那个职位的人？',
        '如何让面试题与候选人的简历和目标 JD 真正匹配，而不是泛泛而问？',
        '如何管理多轮对话的状态，确保后续面试官能看到之前的回答并追问？',
        '如何生成真正有用的评估报告，而不是笼统的"表现良好"？',
      ],
      solution:
        '设计了 4 个专家智能体，每个拥有独立的系统提示和评估维度：HR 面试官关注职业规划与软技能，技术面试官考察编程能力与系统设计，行业专家聚焦领域知识与行业洞察，挑剔评审专门挖漏洞和追问含糊之处。4 位面试官按顺序各进行 3-4 轮提问，最终汇总输出综合评估报告。',
      architecture:
        'FastAPI 作为后端服务管理对话状态与会话记录，ChromaDB 向量数据库存储 55 道精选面试题，通过语义检索匹配最相关题目。简历和 JD 上传后先做技能差距分析，提取关键能力维度作为面试上下文，传入各智能体的提示词中。DeepSeek API（兼容 OpenAI SDK）驱动所有智能体，支持多次面试记录存储与历史报告查阅。',
      techStack: [
        'Python 3.10+',
        'FastAPI（Web 服务）',
        'ChromaDB（向量检索）',
        'DeepSeek API（LLM 驱动）',
        'OpenAI SDK（兼容接口）',
        'uvicorn（ASGI 服务器）',
      ],
      promptDesign:
        '每个面试官智能体拥有专属系统提示，明确定义其角色身份、提问风格和评估重点。HR 的提示词强调"评估文化契合度和职业动机"；技术面试官被要求"追问实现细节，不接受模糊答案"；行业专家关注"候选人对行业趋势的理解深度"；挑剔评审则被设定为"找到简历与回答之间的矛盾点"。所有智能体共享同一份面试上下文（简历摘要 + JD 关键词），确保问题有的放矢。',
      workflow: [
        '上传简历（PDF/文本）和目标岗位 JD',
        '系统进行技能差距分析，提取核心能力维度',
        '第一轮：HR 面试官进行 3-4 题职业规划类提问',
        '第二轮：技术面试官深入考察编程与系统设计能力',
        '第三轮：行业专家评估领域知识与行业认知',
        '第四轮：挑剔评审针对薄弱点进行压力追问',
        '汇总四轮表现，生成维度化综合评估报告',
      ],
      challenges: [
        {
          problem:
            '多轮面试中，后面的面试官无法感知前面的对话内容，导致重复提问，体验割裂。',
          solution:
            '在每个智能体的提示词上下文中注入摘要化的前序对话记录，让每位"面试官"在进场前已了解候选人此前的表现。同时对历史对话做截断摘要以控制 Token 消耗。',
        },
        {
          problem:
            'ChromaDB 向量检索偶尔返回与简历领域不相关的题目，降低面试针对性。',
          solution:
            '在检索时增加元数据过滤，结合 JD 提取的技术标签对候选题目做二次筛选，确保检索到的题目与候选人背景高度匹配。',
        },
      ],
      results: [
        '完整模拟 4 轮、16+ 道题的真实面试流程',
        '支持多次面试记录存储与历史报告随时查阅',
        '55 道向量化题库驱动精准、个性化提问',
        '输出多维度综合评估报告，涵盖各角色打分与改进建议',
      ],
      reflection:
        '这个项目让我深刻理解了"多智能体"不只是"多个 API 调用"——关键在于每个智能体的角色设定要足够清晰，边界要足够明确。提示词的质量直接决定了"面试官"是否像那么回事。另一个收获是：状态管理在多轮对话中至关重要，早期忽视这一点导致了很多体验问题。',
    },
  },
  {
    id: '2',
    slug: 'interactive-fiction-engine',
    title: '互动叙事引擎',
    subtitle: '基于自定义 DSL 的脚本驱动交互式小说游戏引擎',
    description:
      '一套完整的互动叙事游戏引擎，支持自定义脚本语言（DSL）编写故事内容，Python 后端处理游戏逻辑，Godot 前端提供多媒体展示，WebSocket 实现实时通信。',
    tags: ['Python', 'Godot 4', 'GDScript', 'WebSocket', '自定义 DSL', '游戏开发'],
    featured: true,
    date: '2024-08',
    status: 'completed',
    githubUrl: 'https://github.com/icecv/Interactive-fiction-engine',
    gradient: 'from-violet-500 to-purple-600',
    coverImage: '/projects/fiction-engine.png',
    detail: {
      background:
        '市面上的互动小说工具要么过于简单（只支持线性叙事），要么学习成本极高（需要掌握完整的游戏引擎）。我想构建一个"中间层"：让创作者用简洁的脚本语言就能写出支持分支剧情、变量系统、骰子机制的复杂故事，同时拥有完整的多媒体展示能力。',
      problemBreakdown: [
        '如何设计一个足够简洁、创作者不需要编程基础也能上手的 DSL 脚本语言？',
        '游戏状态（变量、场景、玩家选择历史）如何在 Python 后端与 Godot 前端之间可靠同步？',
        '如何支持条件分支（-when 参数）、骰子机制（1d20、1d6+属性值）等复杂游戏逻辑？',
        '多媒体资源（背景音乐、音效、配音、图片）如何与剧情脚本紧密结合？',
      ],
      solution:
        '设计了一套自定义 DSL 脚本语言，核心命令包括 say（对话）、choose（选项分支）、setVar（变量赋值）、jump（场景跳转）、roll（骰子判定）。Python 后端负责脚本解析、游戏逻辑计算和状态管理，Godot 4 前端负责 UI 渲染和多媒体播放，两者通过 WebSocket 实时通信，实现逻辑与展示的彻底分离。',
      architecture:
        'Python 后端引擎采用状态机模式管理游戏进程，每个场景（Scene）作为独立的状态节点。脚本解析器将 DSL 文本转换为可执行的指令队列，支持数学表达式计算（用于属性加成骰子）和条件求值（用于分支判断）。Godot 前端通过 WebSocket 接收指令，根据指令类型触发对应的 UI 动画、音频播放或用户输入收集，再将结果回传后端继续推进剧情。',
      techStack: [
        'Python 3.8+（后端引擎）',
        'Godot 4.x / GDScript（前端 UI）',
        'WebSocket（前后端实时通信）',
        '自定义 DSL（故事脚本语言）',
        'Windows / Linux / macOS 跨平台',
      ],
      promptDesign:
        '这个项目没有直接使用 LLM，但 DSL 的设计思路与 Prompt 工程高度相通：都是在设计一种"给非技术用户的结构化表达语言"。say、choose、setVar 这些命令的命名和语法，经过多次迭代，目标是让创作者"读脚本就像读剧本"，降低认知负担。',
      workflow: [
        '创作者用 DSL 编写 .script 故事文件',
        'Python 引擎解析脚本，构建场景状态机',
        '启动 WebSocket 服务，等待 Godot 前端连接',
        'Godot 前端连接后，后端开始推送第一个场景指令',
        '前端渲染对话、选项、音效等多媒体内容',
        '玩家做出选择，前端将结果回传后端',
        '后端根据条件和变量计算下一个场景，继续推送',
      ],
      challenges: [
        {
          problem:
            'WebSocket 通信中，偶发的消息乱序导致游戏状态与 UI 展示不一致，出现"对话跳帧"现象。',
          solution:
            '为每条 WebSocket 消息增加序列号和确认机制（ACK），前端收到消息后回传确认，后端在收到确认前不推送下一条指令，彻底解决乱序问题。',
        },
        {
          problem:
            'DSL 中骰子表达式（如 1d6+{strength}）需要解析变量引用和动态计算，初版正则解析方案在复杂表达式下容易出错。',
          solution:
            '重写为递归下降解析器（Recursive Descent Parser），支持嵌套表达式和变量内插，同时增加了友好的语法错误提示，帮助创作者快速定位脚本问题。',
        },
      ],
      results: [
        '完整实现自定义 DSL 解释器，支持 8 种核心脚本命令',
        '支持条件分支、变量系统、骰子判定等复杂游戏机制',
        '实现图片、背景音乐、音效、配音的多媒体联动',
        '跨平台支持（Windows / Linux / macOS），提供可直接运行的 .exe',
        '附带示例脚本，创作者可零基础快速上手',
      ],
      reflection:
        '这个项目最大的收获是对"语言设计"的理解——哪怕是简单的 DSL，也需要在"表达力"和"简洁性"之间找到平衡。一开始我设计了太多命令，后来意识到大部分都可以用 setVar + jump 的组合实现，最终大幅精简了语法，让脚本更易读。前后端分离通过 WebSocket 通信的架构也让我真正理解了"状态同步"的复杂性。',
    },
  },
  {
    id: '3',
    slug: 'game-industry-dashboard',
    title: '游戏产业数据可视化仪表盘',
    subtitle: '融合 IGDB 与世界银行数据的多维度游戏产业分析平台',
    description:
      '整合 IGDB 游戏 API 与世界银行经济数据，构建交互式可视化仪表盘，支持 2014-2024 年游戏评分数据的多维分析与 26 国经济指标的地图联动展示。',
    tags: ['Python', 'IGDB API', 'World Bank API', '数据可视化', '交互地图', 'Dashboard'],
    featured: true,
    date: '2024-05',
    status: 'completed',
    githubUrl: 'https://github.com/icecv/Game-Industry-Data-Visualization-Website-Dashboard',
    gradient: 'from-cyan-500 to-blue-600',
    coverImage: '/projects/game-dashboard.png',
    detail: {
      background:
        '游戏产业的讨论往往停留在销量和口碑层面，很少有人把游戏数据与国家经济发展（GDP、互联网普及率）结合起来分析。我想探索一个问题：一个国家的经济发展水平，会影响其游戏市场的构成和偏好吗？这个项目就是为了用数据来回答这个问题。',
      problemBreakdown: [
        'IGDB 和世界银行是两个完全异构的数据源，如何将游戏数据与国家经济数据关联起来？',
        '游戏数据中城市/发行商信息如何转换为地理坐标，实现地图可视化？',
        'API 调用耗时且有频率限制，如何避免每次使用都重新拉取数据？',
        '如何设计交互逻辑，让用户可以按年份、数据类型自由切换视图？',
      ],
      solution:
        '构建了双数据源整合管道：IGDB 提供 2014-2024 年评分最高游戏的元数据（类型、发行商、城市），世界银行 API 提供 26 个国家的 GDP 和互联网普及率数据。通过地理编码将游戏发行城市转换为坐标，实现地图标记。前端导出为 dashboard.html 静态文件，支持按年份筛选和数据类型切换。',
      architecture:
        '项目分为五个核心模块：main.py（程序入口与调度），api_game_data.py（IGDB 数据获取与处理），api_world_data.py（世界银行经济数据获取），webmap.py（地图与可视化渲染），以及本地数据缓存层。数据获取后缓存到本地 JSON 文件，避免重复 API 调用。最终将所有可视化组件整合为单一 dashboard.html 文件，无需服务器即可查阅。',
      techStack: [
        'Python 3.8+',
        'IGDB API（游戏数据）',
        'World Bank Data API（经济数据）',
        'Folium（交互地图）',
        'Pandas（数据处理）',
        'Plotly / Matplotlib（图表可视化）',
        'Geopy（地理编码）',
      ],
      workflow: [
        '配置 IGDB API 凭证，执行 python main.py',
        'api_game_data.py 拉取 2014-2024 年 Top 游戏数据并缓存',
        'api_world_data.py 拉取 26 国 GDP 与互联网普及率数据并缓存',
        'Geopy 对游戏发行城市进行地理编码，生成坐标数据',
        'webmap.py 整合数据，渲染交互地图与多维图表',
        '自动导出 dashboard.html，在浏览器中打开即可使用',
      ],
      challenges: [
        {
          problem:
            'IGDB API 有调用频率限制，且部分游戏的城市信息缺失或不标准，导致地理编码失败率高。',
          solution:
            '实现了请求节流（每次调用间隔控制）和本地 JSON 缓存，确保数据获取后不再重复请求。对于地理编码失败的条目，增加了模糊匹配和手动映射表作为兜底，将城市匹配失败率从 40% 降至 8%。',
        },
        {
          problem:
            '世界银行数据与 IGDB 游戏数据在国家命名上存在差异（如"United States"vs"USA"），导致联表困难。',
          solution:
            '构建了国家名称标准化字典，统一映射到 ISO 3166-1 国家代码作为主键，所有数据集以国家代码关联，彻底解决命名歧义问题。',
        },
      ],
      results: [
        '整合 10 年（2014-2024）游戏评分数据与 26 国经济数据',
        '实现按年份筛选、数据类型切换的交互式地图展示',
        '导出独立 dashboard.html，无需服务器可直接浏览',
        '发现互联网普及率与 RPG/策略类游戏市场规模存在正相关趋势',
      ],
      reflection:
        '这个项目最大的挑战不是可视化本身，而是数据清洗和两个异构数据源的关联。真实世界的数据永远比想象中更脏——城市名拼写错误、国家名不统一、部分年份数据缺失……这些问题花了我比写可视化逻辑多得多的时间。这也让我更深刻地理解了"数据质量决定分析质量"这句话。',
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
