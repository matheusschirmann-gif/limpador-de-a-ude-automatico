# limpador-de-a-ude-automatico
Projeto Agrinho 2026 - Agro forte, futuro sustentável.
// Definição dos pinos do Sensor Ultrassônico
const int PIN_TRIG = 9;
const int PIN_ECHO = 10;

// Definição dos pinos do Driver de Motor (Navegação)
const int MOTOR_A_PAIN1 = 4; // Motor Esquerdo
const int MOTOR_A_PAIN2 = 5;
const int MOTOR_B_PAIN1 = 6; // Motor Direito
const int MOTOR_B_PAIN2 = 7;

// Definição do pino da Esteira Limpadora
const int PIN_ESTEIRA = 8;

// Distância mínima para desviar de um obstáculo (em centímetros)
const int DISTANCIA_OBSTACULO = 40; 

void setup() {
  // Configuração dos pinos do sensor
  pinMode(PIN_TRIG, OUTPUT);
  pinMode(PIN_ECHO, INPUT);

  // Configuração os pinos dos motores
  pinMode(MOTOR_A_PAIN1, OUTPUT);
  pinMode(MOTOR_A_PAIN2, OUTPUT);
  pinMode(MOTOR_B_PAIN1, OUTPUT);
  pinMode(MOTOR_B_PAIN2, OUTPUT);
  
  // Configuração do pino da esteira
  pinMode(PIN_ESTEIRA, OUTPUT);

  // Inicia a comunicação serial para monitoramento
  Serial.begin(9600);
}

void loop() {
  long duracao;
  long distancia;

  // Limpa o pino do Trig
  digitalWrite(PIN_TRIG, LOW);
  delayMicroseconds(2);
  
  // Ativa o sensor por 10 microsegundos
  digitalWrite(PIN_TRIG, HIGH);
  delayMicroseconds(10);
  digitalWrite(PIN_TRIG, LOW);

  // Lê o tempo de resposta do Echo
  duracao = pulseIn(PIN_ECHO, HIGH);
  
  // Calcula a distância em centímetros
  distancia = duracao * 0.034 / 2;

  // Lógica de movimentação e limpeza
  if (distancia > 0 && distancia < DISTANCIA_OBSTACULO) {
    // Se encontrar a margem ou obstáculo, para, recua e vira
    Serial.println("Obstáculo detectado! Desviando...");
    pararLimpeza();
    retroceder();
    delay(1000);
    virarA_Direita();
    delay(1500); // Tempo para girar e mudar de direção
  } else {
    // Caminho livre: navega para frente e liga a esteira de limpeza
    Serial.println("Caminho livre. Limpando o açude...");
    ligarLimpeza();
    moverParaFrente();
  }

  delay(100); // Pequena pausa antes da próxima leitura
}

// ---- FUNÇÕES DE CONTROLE DOS MOTORES ----

void moverParaFrente() {
  digitalWrite(MOTOR_A_PAIN1, HIGH);
  digitalWrite(MOTOR_A_PAIN2, LOW);
  digitalWrite(MOTOR_B_PAIN1, HIGH);
  digitalWrite(MOTOR_B_PAIN2, LOW);
}

void retroceder() {
  digitalWrite(MOTOR_A_PAIN1, LOW);
  digitalWrite(MOTOR_A_PAIN2, HIGH);
  digitalWrite(MOTOR_B_PAIN1, LOW);
  digitalWrite(MOTOR_B_PAIN2, HIGH);
}

void virarA_Direita() {
  // Gira um motor para frente e outro para trás para girar no próprio eixo
  digitalWrite(MOTOR_A_PAIN1, HIGH);
  digitalWrite(MOTOR_A_PAIN2, LOW);
  digitalWrite(MOTOR_B_PAIN1, LOW);
  digitalWrite(MOTOR_B_PAIN2, HIGH);
}

void ligarLimpeza() {
  // Ativa o motor que recolhe a sujeira da superfície
  digitalWrite(PIN_ESTEIRA, HIGH);
}

void pararLimpeza() {
  // Desliga o recolhedor durante as manobras
  digitalWrite(PIN_ESTEIRA, LOW);
}
