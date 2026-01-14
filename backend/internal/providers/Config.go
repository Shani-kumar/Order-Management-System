package providers

import (
	"os"

	"gopkg.in/yaml.v3"
)

type DbConfig struct {
	Host     string `yaml:"host"`
	Port     int    `yaml:"port"`
	User     string `yaml:"user"`
	Password string `yaml:"password"`
	Name     string `yaml:"name"`
}

type AppConfig struct {
	DbConfig DbConfig `yaml:"db"`
}

func LoadConfig() (*AppConfig, error) {
	filePath := "config.yaml"
	file, err := os.Open(filePath)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var cfg AppConfig
	decoder := yaml.NewDecoder(file)
	if err := decoder.Decode(&cfg); err != nil {
		return nil, err
	}

	return &cfg, err
}
