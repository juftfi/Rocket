import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import {
  Rocket,
  Coins,
  Sparkles,
  ShieldCheck,
  Flame,
  Twitter,
  Send,
  Copy,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import heroRocket from "@/assets/hero-rocket.png";
import vaultBnb from "@/assets/vault-bnb.png";
import logoRocket from "@/assets/logo-rocket.png";

const CONTRACT = "0xR0CKETDA0...flap.sh";

const Index = () => {
  const [copied, setCopied] = useState(false);

  const copyContract = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    toast.success("Contract address copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top announcement bar */}
      <div className="bg-ink text-background py-2.5 px-4 text-center text-sm font-medium">
        <span className="inline-flex items-center gap-2">
          <Badge className="bg-primary-glow text-ink hover:bg-primary-glow font-bold">LIVE</Badge>
          🚀 RocketDAO is launching on flap.sh — 80% tax claimable in $slisBNB
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-bold text-xl">
            <img src={logoRocket} alt="RocketDAO logo" className="h-9 w-9" width={36} height={36} />
            <span>RocketDAO</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#tokenomics" className="hover:text-foreground transition-smooth">Tokenomics</a>
            <a href="#how" className="hover:text-foreground transition-smooth">How it works</a>
            <a href="#rewards" className="hover:text-foreground transition-smooth">Rewards</a>
            <a href="#faq" className="hover:text-foreground transition-smooth">FAQ</a>
          </div>
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant rounded-full font-bold">
            <a href="https://flap.sh" target="_blank" rel="noopener noreferrer">Launch on flap.sh</a>
          </Button>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-hero">
          <div className="container mx-auto px-4 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs font-semibold">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary" />
                Memecoin powered by BNB Chain
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
                Stake your <span className="text-primary">$BNB</span>,
                earn rewards, & ride the rocket
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
                RocketDAO is the leading degenerate liquid memecoin protocol on BNB Chain.
                80% of all trading tax is automatically claimable in <span className="font-semibold text-foreground">$slisBNB</span>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant rounded-full font-bold h-14 px-8 text-base">
                  <a href="https://flap.sh" target="_blank" rel="noopener noreferrer">
                    <Rocket className="mr-2 h-5 w-5" />
                    Buy on flap.sh
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full font-bold h-14 px-8 text-base border-2">
                  <a href="#how" className="inline-flex items-center">
                    How it works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary">80%</div>
                  <div className="text-xs text-muted-foreground mt-1">Tax → $slisBNB</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Community owned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">0</div>
                  <div className="text-xs text-muted-foreground mt-1">Team allocation</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
              <img
                src={heroRocket}
                alt="RocketDAO rocket launching with BNB coins"
                className="relative animate-float w-full max-w-xl mx-auto"
                width={1280}
                height={1280}
              />
            </div>
          </div>
        </section>

        {/* Marquee */}
        <section className="bg-ink text-background py-5 overflow-hidden border-y border-border">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 text-lg font-bold">
                <span>🚀 ROCKETDAO</span>
                <span className="text-primary-glow">•</span>
                <span>80% TAX → $slisBNB</span>
                <span className="text-primary-glow">•</span>
                <span>LAUNCHING ON FLAP.SH</span>
                <span className="text-primary-glow">•</span>
                <span>BUILT ON BNB CHAIN</span>
                <span className="text-primary-glow">•</span>
                <span>TO THE MOON 🌕</span>
                <span className="text-primary-glow">•</span>
              </div>
            ))}
          </div>
        </section>

        {/* Rewards / Vault */}
        <section id="rewards" className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-bnb opacity-20 blur-3xl rounded-full" />
              <img
                src={vaultBnb}
                alt="Vault filling with BNB rewards"
                loading="lazy"
                className="relative w-full max-w-lg mx-auto animate-float"
                width={1024}
                height={1024}
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <Badge className="bg-bnb text-bnb-foreground hover:bg-bnb rounded-full px-4 py-1.5 font-semibold">
                <Coins className="h-3.5 w-3.5 mr-1.5" />
                The reward engine
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                80% of every trade tax<br />
                <span className="text-primary">streams to you in $slisBNB</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Hold $ROCKET, watch the vault fill. Every buy and sell on flap.sh feeds
                the protocol treasury — and 80% of that flow gets redistributed as
                liquid-staked BNB, claimable any time.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  { icon: Zap, text: "Auto-claim mechanics — no farming, no lockups" },
                  { icon: TrendingUp, text: "$slisBNB earns staking yield while you wait" },
                  { icon: ShieldCheck, text: "Fully on-chain via flap.sh smart vault" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground pt-1.5">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section id="how" className="bg-secondary/40 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5">How it works</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                A memecoin built like a protocol
              </h2>
              <p className="text-lg text-muted-foreground">
                No gimmicks. Transparent tax. Real yield routed to holders in liquid-staked BNB.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: "Launch on flap.sh",
                  desc: "Fair launch on flap.sh — the home of degen tokenomics on BNB Chain. No presale, no sniper bots.",
                },
                {
                  icon: Flame,
                  title: "Trade with 80% tax",
                  desc: "Every buy and sell triggers a tax. 80% goes straight into the slisBNB reward vault for holders.",
                },
                {
                  icon: Coins,
                  title: "Claim $slisBNB",
                  desc: "Open the dashboard, hit claim, receive $slisBNB. Earn liquid staking yield on top of memecoin gains.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
                >
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-elegant">
                    <f.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tokenomics */}
        <section id="tokenomics" className="container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">Tokenomics</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Simple. Transparent. Degen.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { label: "Total supply", value: "1,000,000,000", sub: "$ROCKET" },
              { label: "Trade tax", value: "5%", sub: "Buy & sell" },
              { label: "→ slisBNB rewards", value: "80%", sub: "Of all tax" },
              { label: "→ Liquidity & burn", value: "20%", sub: "Forever" },
            ].map((t, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 shadow-card text-center">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
                  {t.label}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{t.value}</div>
                <div className="text-sm text-muted-foreground">{t.sub}</div>
              </div>
            ))}
          </div>

          {/* Contract */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-ink text-background rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-background/60 mb-1 font-semibold">
                  Contract address (BNB Chain)
                </div>
                <div className="font-mono text-sm md:text-base truncate">{CONTRACT}</div>
              </div>
              <Button
                onClick={copyContract}
                className="bg-primary hover:bg-primary-glow text-primary-foreground rounded-full font-bold flex-shrink-0"
              >
                <Copy className="h-4 w-4 mr-2" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 pb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-elegant">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-bnb/30 blur-3xl" />
            <div className="relative max-w-2xl mx-auto space-y-6 text-primary-foreground">
              <Users className="h-12 w-12 mx-auto" />
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Join the launch
              </h2>
              <p className="text-lg opacity-90 text-balance">
                Be early. Hold $ROCKET, earn $slisBNB, and help fuel the most degen
                liquid-staking experiment on BNB Chain.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                <Button asChild size="lg" className="bg-ink hover:bg-ink/90 text-background rounded-full font-bold h-14 px-8 text-base">
                  <a href="https://flap.sh" target="_blank" rel="noopener noreferrer">
                    <Rocket className="mr-2 h-5 w-5" />
                    Launch on flap.sh
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full font-bold h-14 px-8 text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="mr-2 h-5 w-5" />
                    Follow on X
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container mx-auto px-4 pb-24 max-w-3xl">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="secondary" className="rounded-full px-4 py-1.5">FAQ</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Got questions?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "What is RocketDAO?",
                a: "RocketDAO ($ROCKET) is a memecoin on BNB Chain launching via flap.sh. It combines degen culture with a real reward mechanism: 80% of every trade tax is redistributed to holders as $slisBNB.",
              },
              {
                q: "What is $slisBNB?",
                a: "$slisBNB is the liquid-staked BNB token from Lista DAO. Holding it earns you BNB staking yield while keeping your position fully liquid. RocketDAO routes its tax revenue into slisBNB so holders earn yield on top of yield.",
              },
              {
                q: "How do I claim my rewards?",
                a: "Once $ROCKET is live on flap.sh, connect your wallet to the RocketDAO dashboard and click claim. Your accumulated share of the slisBNB vault arrives in your wallet instantly.",
              },
              {
                q: "Is there a presale or team allocation?",
                a: "No. RocketDAO is a 100% fair launch on flap.sh. No presale, no team tokens, no insider allocation. Pure community memecoin energy.",
              },
              {
                q: "What is flap.sh?",
                a: "flap.sh is a fair-launch token platform on BNB Chain. Tokens launched there have transparent bonding curves, instant liquidity, and built-in tax routing — perfect infrastructure for RocketDAO's reward model.",
              },
            ].map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-bold text-base hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 font-bold text-xl">
              <img src={logoRocket} alt="" className="h-9 w-9" width={36} height={36} />
              <span>RocketDAO</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Send className="h-4 w-4" />
              </a>
              <a href="https://flap.sh" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-background/10 hover:bg-primary transition-smooth flex items-center justify-center">
                <Rocket className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-background/60">
              © 2026 RocketDAO. Memecoin. DYOR. To the moon.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
