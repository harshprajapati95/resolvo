// ─── Navigation ───────────────────────────────────────────────
export const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Customers', href: '/customers' },
]

// ─── Trusted Logos ────────────────────────────────────────────
export const trustedCompanies = [
  'Amplitude', 'Notion', 'Loom', 'Retool', 'Vercel',
  'Linear', 'Clerk', 'Posthog', 'Neon', 'Fly.io',
]

// ─── Features ─────────────────────────────────────────────────
export const features = [
  {
    id: 'autonomous',
    icon: 'Zap',
    title: 'Autonomous Resolution',
    description:
      'Resolvo reads your policies, FAQs, and help docs — then resolves tickets completely on its own. No human needed for 80% of your volume.',
    bullets: ['End-to-end ticket closure', 'Policy-aware decisions', 'Zero hallucination guarantee'],
    color: 'teal',
  },
  {
    id: 'grounded',
    icon: 'BookOpen',
    title: 'Knowledge-Grounded Answers',
    description:
      'Every response is anchored to your real documentation. If the answer isn\'t in your knowledge base, Resolvo says so — and escalates.',
    bullets: ['Cite exact sources', 'Auto-sync with Notion, Confluence', 'No made-up policies'],
    color: 'blue',
  },
  {
    id: 'escalation',
    icon: 'Users',
    title: 'Smart Human Escalation',
    description:
      'Complex or sensitive cases are handed to your team with a full conversation summary, intent classification, and suggested next steps.',
    bullets: ['Full context handoff', 'Intent & sentiment tagging', 'Priority routing rules'],
    color: 'purple',
  },
]

// ─── How It Works ─────────────────────────────────────────────
export const steps = [
  {
    step: '01',
    title: 'Connect Your Knowledge Base',
    description: 'Sync your help docs, Notion pages, Confluence wikis, or upload PDFs. Resolvo learns your policies in minutes.',
    icon: 'Database',
  },
  {
    step: '02',
    title: 'AI Reads the Ticket',
    description: 'When a ticket arrives, Resolvo classifies intent, detects sentiment, and retrieves relevant knowledge.',
    icon: 'Search',
  },
  {
    step: '03',
    title: 'Draft a Grounded Response',
    description: 'The AI crafts a precise, policy-accurate reply — citing the exact docs it used. No guessing.',
    icon: 'FileText',
  },
  {
    step: '04',
    title: 'Resolve or Escalate',
    description: 'Simple cases are resolved automatically. Complex ones are routed to agents with full context attached.',
    icon: 'GitBranch',
  },
  {
    step: '05',
    title: 'Learn and Improve',
    description: 'Resolvo tracks resolution rates, flags knowledge gaps, and suggests new docs to add to your base.',
    icon: 'TrendingUp',
  },
]

// ─── Metrics ──────────────────────────────────────────────────
export const metrics = [
  { value: 92, suffix: '%', label: 'Resolution Rate', sublabel: 'Tickets resolved without human touch' },
  { value: 18, prefix: '+', suffix: '%', label: 'CSAT Improvement', sublabel: 'Average across customers' },
  { value: 60, suffix: '%', label: 'Faster Response', sublabel: 'Compared to human-only teams' },
  { value: 3, suffix: 'min', label: 'Avg. Time to Resolve', sublabel: 'Down from 4+ hours' },
]

// ─── Testimonials ─────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      'We went from a 4-hour average response time to under 3 minutes. Resolvo handles 87% of our tickets autonomously — and our CSAT went up, not down.',
    author: 'Sarah Chen',
    role: 'Head of Customer Success',
    company: 'Amplitude',
    avatar: 'SC',
    rating: 5,
    metric: '87% auto-resolved',
  },
  {
    id: 2,
    quote:
      'Finally an AI tool that doesn\'t make up policies. Every answer Resolvo gives cites the exact help article. Our agents trust it completely.',
    author: 'Marcus Webb',
    role: 'VP of Support',
    company: 'Retool',
    avatar: 'MW',
    rating: 5,
    metric: '0 hallucinations logged',
  },
  {
    id: 3,
    quote:
      'The escalation handoff is magic. When Resolvo can\'t handle something, my team gets a full summary, the customer\'s history, and a suggested resolution — already written.',
    author: 'Priya Nair',
    role: 'Support Lead',
    company: 'Loom',
    avatar: 'PN',
    rating: 5,
    metric: '40% less agent ramp time',
  },
]

// ─── Pricing ──────────────────────────────────────────────────
export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'Perfect for small support teams just getting started with AI.',
    highlight: false,
    cta: 'Start Free Trial',
    features: [
      '500 AI resolutions / month',
      '1 knowledge base',
      'Email channel',
      'Basic analytics',
      'Standard escalation',
      'Community support',
      '—',
      '—',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'For growing teams that need more volume and smarter routing.',
    highlight: true,
    badge: 'Most Popular',
    cta: 'Start Free Trial',
    features: [
      '5,000 AI resolutions / month',
      '5 knowledge bases',
      'Email + Chat + Slack',
      'Advanced analytics',
      'Smart escalation routing',
      'Priority support',
      'API access',
      'Custom AI persona',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    monthlyPrice: 399,
    annualPrice: 319,
    description: 'Enterprise-grade resolution at scale with full customization.',
    highlight: false,
    cta: 'Contact Sales',
    features: [
      'Unlimited AI resolutions',
      'Unlimited knowledge bases',
      'All channels + custom',
      'Full analytics suite',
      'Custom routing rules',
      'Dedicated support',
      'Full API + webhooks',
      'White-label + SSO',
    ],
  },
]

export const pricingFeatureMatrix = [
  { feature: 'AI Resolutions / month', starter: '500', growth: '5,000', scale: 'Unlimited' },
  { feature: 'Knowledge Bases', starter: '1', growth: '5', scale: 'Unlimited' },
  { feature: 'Channels', starter: 'Email', growth: 'Email, Chat, Slack', scale: 'All + Custom' },
  { feature: 'Analytics Dashboard', starter: 'Basic', growth: 'Advanced', scale: 'Full Suite' },
  { feature: 'Smart Escalation', starter: '✓', growth: '✓', scale: '✓' },
  { feature: 'API Access', starter: '✗', growth: '✓', scale: '✓' },
  { feature: 'Custom AI Persona', starter: '✗', growth: '✓', scale: '✓' },
  { feature: 'SSO / SAML', starter: '✗', growth: '✗', scale: '✓' },
  { feature: 'SLA Guarantee', starter: '✗', growth: '✗', scale: '✓' },
]

export const faqs = [
  {
    id: 1,
    question: 'How does Resolvo avoid hallucinating policies?',
    answer:
      'Resolvo uses retrieval-augmented generation (RAG). Every response is grounded in retrieved chunks from your actual knowledge base. If no matching content is found, Resolvo explicitly says so and escalates instead of guessing.',
  },
  {
    id: 2,
    question: 'What happens when Resolvo can\'t resolve a ticket?',
    answer:
      'Resolvo escalates gracefully. It routes the ticket to the appropriate human agent with a full summary, the customer\'s prior conversation history, intent classification, and a suggested response — so your team can pick up without missing a beat.',
  },
  {
    id: 3,
    question: 'How long does setup take?',
    answer:
      'Most customers are live within 24 hours. You connect your knowledge base (Notion, Confluence, Zendesk, or upload PDFs), configure your escalation rules, and Resolvo is ready to go. No engineering required.',
  },
  {
    id: 4,
    question: 'Which ticketing systems does Resolvo integrate with?',
    answer:
      'Resolvo integrates natively with Intercom, Zendesk, Freshdesk, HubSpot, and Help Scout. We also offer a REST API and Zapier integration for custom workflows.',
  },
  {
    id: 5,
    question: 'Is there a free trial?',
    answer:
      'Yes! All plans include a 14-day free trial with no credit card required. You get full access to the platform during the trial period.',
  },
  {
    id: 6,
    question: 'How does pricing work for overages?',
    answer:
      'If you exceed your monthly resolution limit, additional resolutions are billed at $0.08 each on Starter, $0.05 on Growth, and are included at no extra cost on Scale.',
  },
]

// ─── Solutions ────────────────────────────────────────────────
export const saasSolutions = [
  {
    scenario: 'Customer asks how to cancel their subscription',
    action: 'AI retrieves cancellation policy → Walks through steps → Offers pause alternative',
    outcome: 'Ticket resolved in 45 seconds. Churn attempt saved.',
    icon: 'CreditCard',
  },
  {
    scenario: 'User forgot their password and is locked out',
    action: 'AI detects account-lock intent → Sends password reset link → Confirms receipt',
    outcome: 'Fully automated. Zero agent time.',
    icon: 'Lock',
  },
  {
    scenario: '"How do I connect my CRM to your API?"',
    action: 'AI finds API docs → Responds with exact integration steps + code snippet',
    outcome: 'Developer unblocked in under 2 minutes.',
    icon: 'Code',
  },
  {
    scenario: 'User confused about feature X on the Pro plan',
    action: 'AI reads pricing docs → Explains what\'s included → Offers upgrade path',
    outcome: 'Upsell conversation initiated by AI.',
    icon: 'Star',
  },
]

export const ecommSolutions = [
  {
    scenario: '"Where is my order? It\'s been 5 days."',
    action: 'AI checks order status API → Retrieves tracking info → Sends update',
    outcome: 'Real-time tracking update sent. No agent needed.',
    icon: 'Package',
  },
  {
    scenario: 'Customer wants to return a damaged item',
    action: 'AI reads return policy → Initiates return request → Sends prepaid label',
    outcome: 'Return processed automatically in 90 seconds.',
    icon: 'RotateCcw',
  },
  {
    scenario: '"My promo code isn\'t working"',
    action: 'AI validates code → Identifies issue → Applies discount manually or escalates',
    outcome: 'Cart saved. Customer delighted.',
    icon: 'Tag',
  },
  {
    scenario: 'Customer asks about international shipping rates',
    action: 'AI retrieves shipping policy by region → Gives exact rates & timelines',
    outcome: 'Purchase decision accelerated.',
    icon: 'Globe',
  },
]

// ─── Customers Page ───────────────────────────────────────────
export const customerStories = [
  {
    company: 'Amplitude',
    industry: 'Product Analytics SaaS',
    logo: 'AM',
    logoColor: 'bg-orange-500',
    headline: '87% of tickets resolved without any human touch',
    before: { resolutionRate: '34%', responseTime: '4.2 hrs', csat: '3.6/5', agentLoad: '100%' },
    after: { resolutionRate: '91%', responseTime: '2.8 min', csat: '4.8/5', agentLoad: '13%' },
    quote: 'Resolvo transformed how we handle support. Our team now focuses on complex, high-value issues while Resolvo handles the routine ones perfectly.',
    author: 'Sarah Chen, Head of Customer Success',
  },
  {
    company: 'Retool',
    industry: 'Internal Tool Builder',
    logo: 'RT',
    logoColor: 'bg-blue-600',
    headline: 'Cut support costs by 60% while improving CSAT',
    before: { resolutionRate: '41%', responseTime: '3.1 hrs', csat: '3.9/5', agentLoad: '100%' },
    after: { resolutionRate: '89%', responseTime: '4.1 min', csat: '4.9/5', agentLoad: '22%' },
    quote: 'The knowledge-grounded approach was a game changer. Our agents used to spend time correcting AI mistakes — now they just review and approve.',
    author: 'Marcus Webb, VP of Support',
  },
  {
    company: 'Loom',
    industry: 'Video Messaging',
    logo: 'LM',
    logoColor: 'bg-purple-600',
    headline: 'Scaled support 3x without adding headcount',
    before: { resolutionRate: '28%', responseTime: '5.8 hrs', csat: '3.4/5', agentLoad: '100%' },
    after: { resolutionRate: '85%', responseTime: '6.2 min', csat: '4.7/5', agentLoad: '18%' },
    quote: 'We tripled our user base and our support volume didn\'t break us. Resolvo scaled seamlessly — our team stayed the same size.',
    author: 'Priya Nair, Support Lead',
  },
]

// ─── Demo Ticket ──────────────────────────────────────────────
export const demoTicket = {
  subject: 'How do I cancel my subscription?',
  message:
    "Hi, I need to cancel my subscription. I've been trying to find the option in my account settings but I can't locate it. Can someone help me? I want to make sure I'm not charged next month.",
  customer: 'Alex Rivera',
  email: 'alex.rivera@startup.io',
  plan: 'Growth ($149/mo)',
  submitted: '2 minutes ago',
}

export const demoKbSources = [
  'Subscription Management Guide › Cancellation Steps',
  'Billing FAQ › Proration & Refunds',
  'Account Settings › Plan Management',
]

export const demoResponse = `Hi Alex,

Thanks for reaching out! I can help you cancel your subscription right now.

Here's how to cancel:
1. Go to **Settings → Billing → Plan**
2. Click **"Manage Subscription"**
3. Select **"Cancel Plan"** at the bottom
4. Choose your cancellation date (end of billing period or immediate)

Your subscription will remain active until **July 15, 2026** (your next billing date), and you won't be charged after that.

If you'd like to pause instead of cancel (keeping your data), you can select **"Pause Subscription"** on the same page.

Is there anything else I can help with?

— Resolvo AI`
