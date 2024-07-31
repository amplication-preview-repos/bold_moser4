import { Module } from "@nestjs/common";
import { OpportunityModule } from "./opportunity/opportunity.module";
import { CommunicationModule } from "./communication/communication.module";
import { ProfileModule } from "./profile/profile.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { SubCategoryModule } from "./subCategory/subCategory.module";
import { ProposalModule } from "./proposal/proposal.module";
import { MatchModule } from "./match/match.module";
import { ProductModule } from "./product/product.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    OpportunityModule,
    CommunicationModule,
    ProfileModule,
    SubscriptionModule,
    FeedbackModule,
    UserModule,
    CategoryModule,
    SubCategoryModule,
    ProposalModule,
    MatchModule,
    ProductModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
