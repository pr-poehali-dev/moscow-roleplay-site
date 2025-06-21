import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              О проекте Moscow RolePlay
            </h1>
            <p className="text-xl text-gray-600">
              Узнайте больше о нашем уникальном Roblox сервере
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-montserrat font-semibold text-2xl mb-4 text-gray-900">
                Что такое Moscow RP?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Moscow RolePlay — это реалистичный ролевой сервер в Roblox, где
                каждый игрок может выбрать свою профессию и создать уникальную
                историю. Мы создали детализированный виртуальный мир,
                максимально приближенный к реальной жизни.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="MapPin" size={20} />
                <span className="font-medium">
                  Детализированная карта Москвы
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <h3 className="font-montserrat font-semibold text-xl mb-4">
                Наши достижения
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-2xl text-gray-900">
                      500+
                    </div>
                    <div className="text-gray-600">Активных игроков</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-2xl text-gray-900">
                      24/7
                    </div>
                    <div className="text-gray-600">Время работы сервера</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
