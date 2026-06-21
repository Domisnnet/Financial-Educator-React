import { useState } from "react";
import { fineduAITutor, FinEduAITutorOutput } from "@/ai/flows/finedu-ai-tutor";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle, Send, User, Bot, Loader2 } from "lucide-react";

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function AITutor() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Olá! Sou seu tutor financeiro. Tem alguma dúvida sobre como economizar ou investir seu dinheiro?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await fineduAITutor({ question: userMsg });
      setMessages(prev => [...prev, { role: 'bot', content: response.answer }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', content: "Desculpe, tive um problema ao processar sua pergunta. Pode tentar novamente?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-sm h-full flex flex-col overflow-hidden">
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle className="flex items-center gap-2 text-lg font-headline">
          <HelpCircle className="text-primary h-5 w-5" />
          EcoWise Tutor
        </CardTitle>
        <CardDescription>Aprenda educação financeira sem termos difíceis.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 p-0 overflow-hidden flex flex-col">
        <ScrollArea className="flex-1 p-4 h-[400px]">
          <div className="space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'bot' ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {msg.role === 'bot' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${msg.role === 'bot' ? 'bg-secondary text-foreground rounded-tl-none' : 'bg-primary text-primary-foreground rounded-tr-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Bot size={16} />
                </div>
                <div className="p-3 bg-secondary rounded-2xl rounded-tl-none">
                  <Loader2 className="animate-spin h-4 w-4" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 bg-background border-t">
          <div className="flex gap-2">
            <Input 
              placeholder="Pergunte qualquer coisa..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="rounded-xl"
            />
            <Button size="icon" onClick={handleSend} disabled={loading || !input.trim()} className="rounded-xl shrink-0">
              <Send size={18} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}