# Migration `20200619175750-create-review`

This migration has been generated by Zurda at 6/19/2020, 5:57:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Post" (
"body" TEXT NOT NULL  ,"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"title" TEXT NOT NULL  )

CREATE TABLE "quaint"."Contact" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"message" TEXT NOT NULL  ,"name" TEXT NOT NULL  )

CREATE TABLE "quaint"."Review" (
"createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"message" TEXT   ,"movie" TEXT NOT NULL  ,"name" TEXT   ,"rating" INTEGER NOT NULL  )

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200614190357-create-contact..20200619175750-create-review
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -21,4 +21,13 @@
   email     String
   message   String
   createdAt DateTime @default(now())
 }
+
+model Review {
+  id        Int @id @default(autoincrement())
+  movie     String
+  name      String?
+  rating    Int
+  message   String?
+  createdAt DateTime @default(now())
+}
```


