﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace SFAS.Database.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    FirstName = table.Column<string>(type: "text", nullable: false),
                    LastName = table.Column<string>(type: "text", nullable: false),
                    IsDeleted = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeletedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    UserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "character varying(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    PasswordHash = table.Column<string>(type: "text", nullable: true),
                    SecurityStamp = table.Column<string>(type: "text", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "boolean", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "boolean", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUsers_AspNetUsers_CreatedByID",
                        column: x => x.CreatedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AspNetUsers_AspNetUsers_DeletedByID",
                        column: x => x.DeletedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_AspNetUsers_AspNetUsers_ModifiedByID",
                        column: x => x.ModifiedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "EmailSubscribers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailSubscribers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RoleId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    AddressId = table.Column<Guid>(type: "uuid", nullable: false),
                    AddressString = table.Column<string>(type: "text", nullable: false),
                    CreatedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeletedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.AddressId);
                    table.ForeignKey(
                        name: "FK_Addresses_AspNetUsers_CreatedByID",
                        column: x => x.CreatedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Addresses_AspNetUsers_DeletedByID",
                        column: x => x.DeletedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Addresses_AspNetUsers_ModifiedByID",
                        column: x => x.ModifiedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    ClaimType = table.Column<string>(type: "text", nullable: true),
                    ClaimValue = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    ProviderKey = table.Column<string>(type: "text", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "text", nullable: true),
                    UserId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    RoleId = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<Guid>(type: "uuid", nullable: false),
                    LoginProvider = table.Column<string>(type: "text", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Value = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Documents",
                columns: table => new
                {
                    DocumentId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    Link = table.Column<string>(type: "text", nullable: true),
                    Content = table.Column<byte[]>(type: "bytea", nullable: true),
                    CreatedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeletedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Documents", x => x.DocumentId);
                    table.ForeignKey(
                        name: "FK_Documents_AspNetUsers_CreatedByID",
                        column: x => x.CreatedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Documents_AspNetUsers_DeletedByID",
                        column: x => x.DeletedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Documents_AspNetUsers_ModifiedByID",
                        column: x => x.ModifiedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Owners",
                columns: table => new
                {
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    CreatedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeletedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Owners", x => x.OwnerId);
                    table.ForeignKey(
                        name: "FK_Owners_AspNetUsers_CreatedByID",
                        column: x => x.CreatedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Owners_AspNetUsers_DeletedByID",
                        column: x => x.DeletedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Owners_AspNetUsers_ModifiedByID",
                        column: x => x.ModifiedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "SportsFacilities",
                columns: table => new
                {
                    FacilityId = table.Column<Guid>(type: "uuid", nullable: false),
                    Type = table.Column<int>(type: "integer", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: false),
                    AddressId = table.Column<Guid>(type: "uuid", nullable: false),
                    OwnerId = table.Column<Guid>(type: "uuid", nullable: true),
                    PropertyForm = table.Column<int>(type: "integer", nullable: true),
                    Length = table.Column<double>(type: "double precision", nullable: true),
                    Width = table.Column<double>(type: "double precision", nullable: true),
                    Area = table.Column<double>(type: "double precision", nullable: true),
                    ActualWorkload = table.Column<int>(type: "integer", nullable: true),
                    AnnualCapacity = table.Column<int>(type: "integer", nullable: true),
                    DocumentId = table.Column<Guid>(type: "uuid", nullable: true),
                    Notes = table.Column<string>(type: "text", nullable: true),
                    Height = table.Column<double>(type: "double precision", nullable: true),
                    Size = table.Column<string>(type: "text", nullable: true),
                    Depth = table.Column<double>(type: "double precision", nullable: true),
                    CoveringType = table.Column<int>(type: "integer", nullable: true),
                    Photo = table.Column<byte[]>(type: "bytea", nullable: true),
                    IsAccessibleForDisabled = table.Column<bool>(type: "boolean", nullable: true),
                    PayingType = table.Column<int>(type: "integer", nullable: true),
                    WhoCanUse = table.Column<string>(type: "text", nullable: true),
                    Link = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    OpenHours = table.Column<string>(type: "text", nullable: true),
                    EPS = table.Column<int>(type: "integer", nullable: true),
                    Hidden = table.Column<bool>(type: "boolean", nullable: false),
                    CreatedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    ModifiedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    ModifiedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true),
                    DeletedByID = table.Column<Guid>(type: "uuid", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "timestamp with time zone", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SportsFacilities", x => x.FacilityId);
                    table.ForeignKey(
                        name: "FK_SportsFacilities_Addresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "Addresses",
                        principalColumn: "AddressId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SportsFacilities_AspNetUsers_CreatedByID",
                        column: x => x.CreatedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SportsFacilities_AspNetUsers_DeletedByID",
                        column: x => x.DeletedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SportsFacilities_AspNetUsers_ModifiedByID",
                        column: x => x.ModifiedByID,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_SportsFacilities_Documents_DocumentId",
                        column: x => x.DocumentId,
                        principalTable: "Documents",
                        principalColumn: "DocumentId");
                    table.ForeignKey(
                        name: "FK_SportsFacilities_Owners_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Owners",
                        principalColumn: "OwnerId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_CreatedByID",
                table: "Addresses",
                column: "CreatedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_DeletedByID",
                table: "Addresses",
                column: "DeletedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_ModifiedByID",
                table: "Addresses",
                column: "ModifiedByID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_CreatedByID",
                table: "AspNetUsers",
                column: "CreatedByID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_DeletedByID",
                table: "AspNetUsers",
                column: "DeletedByID");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_ModifiedByID",
                table: "AspNetUsers",
                column: "ModifiedByID");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Documents_CreatedByID",
                table: "Documents",
                column: "CreatedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Documents_DeletedByID",
                table: "Documents",
                column: "DeletedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Documents_ModifiedByID",
                table: "Documents",
                column: "ModifiedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Owners_CreatedByID",
                table: "Owners",
                column: "CreatedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Owners_DeletedByID",
                table: "Owners",
                column: "DeletedByID");

            migrationBuilder.CreateIndex(
                name: "IX_Owners_ModifiedByID",
                table: "Owners",
                column: "ModifiedByID");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_AddressId",
                table: "SportsFacilities",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_CreatedByID",
                table: "SportsFacilities",
                column: "CreatedByID");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_DeletedByID",
                table: "SportsFacilities",
                column: "DeletedByID");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_DocumentId",
                table: "SportsFacilities",
                column: "DocumentId");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_ModifiedByID",
                table: "SportsFacilities",
                column: "ModifiedByID");

            migrationBuilder.CreateIndex(
                name: "IX_SportsFacilities_OwnerId",
                table: "SportsFacilities",
                column: "OwnerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "EmailSubscribers");

            migrationBuilder.DropTable(
                name: "SportsFacilities");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Documents");

            migrationBuilder.DropTable(
                name: "Owners");

            migrationBuilder.DropTable(
                name: "AspNetUsers");
        }
    }
}
