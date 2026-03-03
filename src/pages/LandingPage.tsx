import { Link } from 'react-router-dom';
import { Calendar, Clock, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Navigation */}
      <nav className="border-b border-zinc-100 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/10">
            <Calendar className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-zinc-900">Agendai</span>
        </div>
        <div className="flex items-center gap-6 text-sm font-sans font-semibold">
          <Link to="/auth" className="text-zinc-500 hover:text-zinc-900 transition-colors">Entrar</Link>
          <Link to="/auth" className="bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-zinc-800 transition-all shadow-lg shadow-primary/10">
            Começar Grátis
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-7xl leading-[1.1] mb-8 font-display font-bold tracking-tight text-zinc-900">
              Sua agenda no <br />
              <span className="italic text-primary">piloto automático.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-10 max-w-md leading-relaxed font-medium">
              Crie seu link personalizado, compartilhe com seus clientes e deixe o Agendai cuidar do resto. Simples, elegante e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/auth" className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-sans font-semibold hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-primary/20">
                Criar minha conta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 px-2">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i}/48/48`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <span className="text-sm text-zinc-400 font-sans font-medium tracking-wide uppercase text-[10px]">+500 profissionais</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-10 border border-zinc-100 relative z-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-sans font-semibold text-zinc-900 capitalize">
                    {format(new Date(), "EEEE, d MMM", { locale: ptBR })}
                  </h3>
                  <p className="text-zinc-400 text-[10px] font-sans font-medium uppercase tracking-widest mt-1">Selecione um horário</p>
                </div>
                <div className="w-14 h-14 bg-zinc-50 rounded-xl flex items-center justify-center border border-zinc-100">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'].map((time, i) => (
                  <div key={time} className={i === 0 ? "bg-primary text-white p-5 rounded-xl text-center shadow-lg shadow-primary/20 font-sans font-semibold" : "bg-zinc-50 p-5 rounded-xl text-center hover:bg-zinc-100 transition-colors cursor-pointer text-zinc-600 font-sans font-semibold border border-zinc-100"}>
                    {time}
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-16 mt-40">
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-sans font-semibold text-zinc-900">Segurança Total</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">Seus dados e de seus clientes protegidos com criptografia de ponta a ponta.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-sans font-semibold text-zinc-900">Link Personalizado</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">Crie um link profissional (agendai.com/seu-negocio) e compartilhe em suas redes.</p>
          </div>
          <div className="space-y-6 group">
            <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center border border-zinc-100 group-hover:scale-110 transition-transform">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h4 className="text-xl font-sans font-semibold text-zinc-900">Gestão de Horários</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">Configure seus horários de atendimento e bloqueie datas específicas com facilidade.</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-100 py-16 px-6 text-center text-sm text-zinc-400 font-sans font-medium uppercase tracking-widest text-[10px]">
        <p>© 2026 Agendai. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
