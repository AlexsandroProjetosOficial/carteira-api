import { CreditCard } from "@repositories/prisma/CreditCard";
import { container } from "tsyringe";
import { ICreditCardRepository } from "types/creditCard/ICreditCardRepository";

container.registerSingleton<ICreditCardRepository>('CreditCard', CreditCard);