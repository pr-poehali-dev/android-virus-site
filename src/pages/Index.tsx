import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-purple-500/10" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Передовая защита
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Android Virus
                  <span className="block text-green-400">Protection</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Комплексное антивирусное решение для Android-устройств. Защита
                  в реальном времени, продвинутое обнаружение угроз и полный
                  контроль безопасности.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <img
                src="/img/7951e527-1040-49f3-8036-ba603631eaef.jpg"
                alt="Android Security"
                className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Защита нового поколения</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Используем передовые алгоритмы машинного обучения для обнаружения
              и блокировки угроз
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg mr-4 group-hover:bg-green-500/30 transition-colors">
                  <Icon name="Scan" size={24} className="text-green-400" />
                </div>
                <h3 className="text-xl font-semibold">Реальное время</h3>
              </div>
              <p className="text-gray-300">
                Непрерывное сканирование и мониторинг всех процессов на
                устройстве
              </p>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg mr-4 group-hover:bg-purple-500/30 transition-colors">
                  <Icon name="Brain" size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold">ИИ-анализ</h3>
              </div>
              <p className="text-gray-300">
                Машинное обучение для обнаружения неизвестных угроз и аномалий
              </p>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 p-6 hover:bg-slate-800/50 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <Icon name="Zap" size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">Быстрая работа</h3>
              </div>
              <p className="text-gray-300">
                Оптимизированный движок не влияет на производительность
                устройства
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как начать использовать</h2>
            <p className="text-xl text-gray-300">
              Простая установка и настройка за 3 шага
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500 to-purple-500 hidden md:block transform -translate-x-1/2" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Скачайте приложение
              </h3>
              <p className="text-gray-300">
                Загрузите APK-файл с официального сайта или из Google Play Store
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 hidden md:block transform -translate-x-1/2" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Установите и запустите
              </h3>
              <p className="text-gray-300">
                Предоставьте необходимые разрешения и запустите первоначальное
                сканирование
              </p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">Настройте защиту</h3>
              <p className="text-gray-300">
                Активируйте реальное время защиты и настройте автоматические
                обновления
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Защитите свое устройство прямо сейчас
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Не ждите, пока угрозы атакуют ваше устройство. Установите надежную
            защиту уже сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
            >
              <Icon name="Download" size={20} className="mr-2" />
              Бесплатно скачать
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
