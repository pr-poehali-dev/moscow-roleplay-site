import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Icon name="Zap" size={16} />
            <span>Новый сезон уже запущен!</span>
          </div>

          <h1 className="font-montserrat font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent animate-scale-in">
            Moscow RolePlay
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Реалистичная ролевая игра в Roblox. Выбери свою профессию и создай
            уникальную историю в мире Moscow RP!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Users" size={20} className="mr-2" />
              Наше сообщество
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                500+ Игроков
              </h3>
              <p className="text-gray-600">Активное сообщество каждый день</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Briefcase" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                6 Профессий
              </h3>
              <p className="text-gray-600">От полицейского до гражданского</p>
            </div>

            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-r from-fire to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                24/7 Онлайн
              </h3>
              <p className="text-gray-600">Сервер работает круглосуточно</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
