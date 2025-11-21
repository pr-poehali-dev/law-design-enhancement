import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useRef } from "react";

const Index = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (cardRef.current) {
      import('html2canvas').then((html2canvas) => {
        html2canvas.default(cardRef.current!, {
          scale: 3,
          backgroundColor: null,
        }).then((canvas) => {
          const link = document.createElement('a');
          link.download = 'business-card.png';
          link.href = canvas.toDataURL();
          link.click();
        });
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-3" style={{ fontFamily: 'Cormorant, serif' }}>
            Визитная карточка юриста
          </h1>
          <p className="text-slate-600">Формат 90×50 мм • Готово к печати</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div ref={cardRef} className="space-y-8">
            <Card className="relative overflow-hidden shadow-2xl rounded-lg" style={{ width: '360px', height: '200px', margin: '0 auto' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e3a8a]"></div>
              
              <div className="absolute top-0 right-0 opacity-10">
                <Icon name="Scale" size={120} className="text-[#d4af37]" />
              </div>
              
              <div className="relative h-full p-6 flex flex-col justify-between text-white">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Gavel" size={24} className="text-[#d4af37]" />
                    <span className="text-[#d4af37] text-sm font-medium tracking-wider">ЮРИДИЧЕСКИЕ УСЛУГИ</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-1" style={{ fontFamily: 'Cormorant, serif' }}>
                    Вера Борисовна
                  </h2>
                  <p className="text-sm text-blue-200">Помощник юриста</p>
                </div>

                <div className="space-y-1.5 text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={14} className="text-[#d4af37]" />
                    <span>+79968742025</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden shadow-2xl rounded-lg" style={{ width: '360px', height: '200px', margin: '0 auto' }}>
              <div className="absolute inset-0 bg-white"></div>
              
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1e3a8a]/5 to-transparent"></div>
              
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] flex items-center justify-center">
                    <Icon name="Scale" size={32} className="text-[#d4af37]" />
                  </div>
                </div>

                <div className="space-y-2 text-slate-700">
                  <div className="flex items-start gap-2 text-sm">
                    <Icon name="MapPin" size={16} className="text-[#1e3a8a] mt-0.5 flex-shrink-0" />
                    <span>г. Москва, ул. Правды, д. 24, офис 301</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Globe" size={16} className="text-[#1e3a8a] flex-shrink-0" />
                    <span>www.legal-consult.ru</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-[#1e3a8a] flex-shrink-0" />
                    <span>Пн-Пт: 9:00 - 18:00</span>
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-200">
                  <p className="text-xs text-slate-500 italic" style={{ fontFamily: 'Cormorant, serif' }}>
                    Юридическая помощь с 2010 года
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2" style={{ fontFamily: 'Cormorant, serif' }}>
                <Icon name="Info" size={20} className="text-[#1e3a8a]" />
                О визитке
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Стандартный формат 90×50 мм</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Двусторонняя печать</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Профессиональный дизайн с юридической символикой</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Высокое разрешение для качественной печати</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Cormorant, serif' }}>
                <Icon name="Printer" size={20} />
                Как печатать
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] text-[#1e3a8a] flex items-center justify-center text-xs font-bold">1</span>
                  <span>Скачайте изображение визитки</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] text-[#1e3a8a] flex items-center justify-center text-xs font-bold">2</span>
                  <span>Закажите печать в типографии на плотном картоне (300 г/м²)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] text-[#1e3a8a] flex items-center justify-center text-xs font-bold">3</span>
                  <span>Выберите ламинацию или УФ-лак для защиты</span>
                </li>
              </ol>
            </Card>

            <Button 
              onClick={handleDownload}
              className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-[#1e3a8a] font-bold py-6 text-lg shadow-lg"
              size="lg"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать визитку
            </Button>
          </div>
        </div>

        <Card className="p-6 bg-slate-50 border-2 border-dashed border-slate-300">
          <div className="flex items-start gap-3">
            <Icon name="Lightbulb" size={24} className="text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Совет по печати</h4>
              <p className="text-sm text-slate-600">
                Для лучшего результата рекомендуем печатать на дизайнерском картоне с тиснением фольгой золотого цвета. 
                Это придаст визитке премиальный вид и подчеркнет профессионализм.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;