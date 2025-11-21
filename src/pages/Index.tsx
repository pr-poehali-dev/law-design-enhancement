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
              <div className="absolute inset-0 bg-white"></div>
              
              <div className="absolute left-0 top-0 bottom-0 w-[140px]">
                <img 
                  src="https://cdn.poehali.dev/files/7ec50343-48ec-495a-a5a1-3d42ee289862.png" 
                  alt="Вера Борисовна"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              
              <div className="absolute right-0 top-0 bottom-0" style={{ width: '220px', background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d4b8 100%)' }}>
                <div className="absolute top-4 right-4 opacity-20">
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 140'%3E%3Cpath fill='%23c19a5b' d='M60 10 L70 40 L100 40 L75 60 L85 90 L60 70 L35 90 L45 60 L20 40 L50 40 Z M60 0 L50 20 L70 20 Z M30 50 L40 70 L50 60 Z M70 60 L80 70 L90 50 Z M45 100 L55 120 L60 110 Z M65 110 L75 120 L65 100 Z'/%3E%3C/svg%3E" 
                    alt="Герб"
                    style={{ width: '80px', height: '95px' }}
                  />
                </div>
                
                <div className="relative h-full p-4 flex flex-col justify-between">
                  <div className="pt-2">
                    <h2 className="text-xl font-bold mb-1 text-[#8B4513]" style={{ fontFamily: 'Cormorant, serif' }}>
                      Вера Борисовна
                    </h2>
                    <p className="text-xs text-[#8B4513]/80 italic" style={{ fontFamily: 'Cormorant, serif' }}>Помощник юриста</p>
                  </div>

                  <div className="space-y-1 text-xs text-[#8B4513]">
                    <div>тел. +79968742025</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="relative overflow-hidden shadow-2xl rounded-lg" style={{ width: '360px', height: '200px', margin: '0 auto', background: 'linear-gradient(135deg, #f5e6d3 0%, #e8d4b8 100%)' }}>
              <div className="absolute top-0 left-0 right-0 flex justify-center pt-4">
                <img 
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 140'%3E%3Cpath fill='%23c19a5b' d='M60 10 L70 40 L100 40 L75 60 L85 90 L60 70 L35 90 L45 60 L20 40 L50 40 Z M60 0 L50 20 L70 20 Z M30 50 L40 70 L50 60 Z M70 60 L80 70 L90 50 Z M45 100 L55 120 L60 110 Z M65 110 L75 120 L65 100 Z'/%3E%3Ctext x='60' y='130' text-anchor='middle' font-size='8' fill='%23c19a5b'%3EРОССИЙСКАЯ ФЕДЕРАЦИЯ%3C/text%3E%3C/svg%3E" 
                  alt="Герб России"
                  style={{ width: '60px', height: '70px' }}
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-1 bg-[#c19a5b]/30"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-[#8B4513]">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="MapPin" size={14} className="text-[#c19a5b]" />
                    <span>Москва</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Scale" size={14} className="text-[#c19a5b]" />
                    <span className="italic" style={{ fontFamily: 'Cormorant, serif' }}>Профессиональная юридическая помощь</span>
                  </div>
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