import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Online = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 text-gray-900">
              Сервер онлайн
            </h1>
            <p className="text-xl text-gray-600">
              Актуальная информация о сервере и способы подключения
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Icon name="Wifi" size={24} className="text-green-600" />
                  </div>
                  <span>Статус сервера</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Статус:</span>
                    <span className="flex items-center space-x-2 text-green-600 font-semibold">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Онлайн</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Игроков:</span>
                    <span className="font-semibold text-2xl text-primary">
                      347/500
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Пинг:</span>
                    <span className="text-green-600 font-semibold">23ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Gamepad2" size={24} className="text-primary" />
                  </div>
                  <span>Как подключиться</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-semibold">
                        1
                      </span>
                    </div>
                    <span className="text-gray-700">Откройте Roblox</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-semibold">
                        2
                      </span>
                    </div>
                    <span className="text-gray-700">
                      Найдите Moscow RolePlay
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-semibold">
                        3
                      </span>
                    </div>
                    <span className="text-gray-700">Нажмите "Играть"</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-primary to-accent">
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Перейти к игре
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
